import {Beam} from './beam.ts';
import {config} from './config.ts';
import {gameSettings} from './game-settings.ts';
import {Explosion} from './explosion.ts'
import {VirusExplosion} from './virus-explosion.ts'
import Phaser from 'phaser';


export class Scene2 extends Phaser.Scene {
    constructor() {
        super('playGame'); 
    }

    // //  used to prepare data
    // init() {

    // }

    // // load music and images into memory
    // preload() {

    // }

    // add objects to the game
    create() {
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background');
        this.background.setOrigin(0, 0);
        
        this.score = 0;
        this.scoreLabel = this.add.bitmapText(10, 5, 'pixelFont', 'SCORE ', 16);

        this.beamSound = this.sound.add('audio_beam');
        this.explosionSound = this.sound.add('audio_explosion');
        this.pickupSound = this.sound.add('audio_pickup');

        var musicConfig: Phaser.Types.Sound.SoundConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        };

        this.music = this.sound.add('music', musicConfig);

        this.music.play();

        this.ship1 = this.add.sprite(config.width/2 - 50, config.height/2, 'ship');
        this.ship2 = this.add.sprite(config.width/2, config.height/2, 'ship2');
        this.virus = this.add.sprite(config.width/2 + 50, config.height/2, 'virus');

        this.enemies = this.physics.add.group();
        this.enemies.add(this.ship1);
        this.enemies.add(this.ship2);
        this.enemies.add(this.virus);

        this.ship1.play('ship1_anim');
        this.ship2.play('ship2_anim');
        this.virus.play('virus_anim');

        this.powerUps = this.physics.add.group();

        var maxObjects = 4;

        for (var i = 0; i < maxObjects; i++) {
            var powerUp = this.physics.add.sprite(16, 16, 'power-up');
            
            // DRJ
            powerUp.setScale( 0.25 )

            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0, 0, this.game.config.width, this.game.config.height);

            if (Math.random() > 0.5) {
                powerUp.play('red');
            } else {
                powerUp.play('gray');
            }

            powerUp.setVelocity(100, 100);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }

        var player = this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, 'player');


        // DRJ- debug
        this.player.addParticles = ( obj ) => {
            this.player.particles = this.add.particles( 'blue' );
        }


        this.player.play('thrust');
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);


        // DRJ- 'space' atlas contains 'blue' frame
        // var particles = this.add.particles(  this.player.emitter = );
        

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.nextShotAt = 0;
        
        // group to hold all our projectiles
        this.projectiles = this.add.group();

        this.physics.add.collider(this.projectiles, this.powerUps, (projectile, powerUp) => {
            projectile.destroy();
        });

        this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);

        this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);

        this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);
    }

    // //  loop which runs continuously
    update() {
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.virus, 3);

        this.background.tilePositionY -= 0.5;

        this.movePlayerManager();

        if (this.input.activePointer.isDown || Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            if (this.player.active) {
                this.shootBeam();
            }
        }
        for (var i = 0; i < this.projectiles.getChildren().length; i++) {
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }
    }

    zeroPad(number, size) {
        var stringNumber = String(number);
        while (stringNumber.length < (size || 2)) {
            stringNumber = `0${stringNumber}`;
        }
        return stringNumber;
    }
    
    hitEnemy(projectile, enemy) {
        
        console.log( enemy.texture.key )
        var key:string = enemy.texture.key; 
        switch( key ) { 
            case "virus": { 
                var explosion = new VirusExplosion( this, enemy.x, enemy.y ); 
                break; 
            }  
            default: { 
                var explosion = new Explosion(this, enemy.x, enemy.y); 
                break;              
            } 
        }

        // var explosion = new Explosion(this, enemy.x, enemy.y);

        projectile.destroy();
        this.resetShipPos(enemy);
        this.score += 15;
        var scoreFormatted = this.zeroPad(this.score, 6);
        this.scoreLabel.text = `SCORE ${scoreFormatted}`;

        this.explosionSound.play();
    }

    hurtPlayer(player, enemy) {
        this.resetShipPos(enemy);

        if (this.player.alpha < 1)  return;

        navigator.vibrate(Infinity);

        var explosion = new Explosion(this, player.x, player.y);

        player.disableBody(true, true);

        // this.resetPlayer();
        this.time.addEvent({
            delay: 1000,
            // callback: this.resetPlayer,
            callback: () => {
                navigator.vibrate(0);
                this.resetPlayer();
            },
            callbackScope: this,
            loop: false
        });
    }

    resetPlayer() {
        var x = config.width / 2 - 8;
        var y = config.height + 64;
        this.player.enableBody(true, x, y, true, true);

        this.player.alpha = 0.5;


        // DRJ- debug
        var player = this.player;


        var tween = this.tweens.add({
            targets: player,
            y: config.height - 64,
            ease: 'Power1',
            duration: 1500,
            repeat: 0,
            onComplete: function() {
                player.alpha = 1;

                // DRJ- debug
                // var particles = this.add.particles( 'blue' );

                // this.player.emitter = particles.createEmitter({

                var emitterConfig = {
                    // DRJ- ERROR - `ParticleManagerWebGLRenderer.js:101 Uncaught TypeError: Cannot read property 'halfWidth' of null at ParticleEmitterManager.ParticleManagerWebGLRenderer [as renderWebGL] `
                    // frame: 'blue',
                    // frame: 0,
                    // frame: ['blue'],


                    speed: 100,
                    lifespan: {
                        onEmit: function (particle, key, t, value)
                        {
                            // return Phaser.Math.Percent(ship.body.speed, 0, 300) * 2000;
                            return Phaser.Math.Percent(player.body.speed, 0, 300) * 2000;
                        }
                    },
                    alpha: {
                        onEmit: function (particle, key, t, value)
                        {
                            return Phaser.Math.Percent((player.body.speed, 0, 300);
                        }
                    },
                    angle: {
                        onEmit: function (particle, key, t, value)
                        {
                            var v = Phaser.Math.Between(-10, 10);
                            // return ((player.angle - 180) + v;
                        }
                    },
                    scale: { start: 0.6, end: 0 },
                    blendMode: 'ADD'
                };

                // // DRJ- debug
                // if ( this.player.emitter )  this.player.addParticles( {} );
                // this.player.addParticles( {} );

                // if ( !this.player.emitter ) {
                    
                    
                    // DRJ- debug
                    this.player.addParticles( {} );

                    
                    this.player.emitter = this.player.particles.createEmitter( emitterConfig );
                    // this.player.particles = add.particles( 'blue', 0, this.player.emitter );
                    this.player.emitter.startFollow( this.player );

                    console.log( 'startFollow( this.player )' );
                // }

            },
            callbackScope: this
        });


        this.player.addParticles( {} );
    }

    pickPowerUp(player, powerUp) {
        powerUp.disableBody(true, true);
        this.pickupSound.play();
    }

    shootBeam() {
        if (this.nextShotAt > this.game.getTime())  return;
        var beam = new Beam(this);
        this.beamSound.play();
        this.nextShotAt = this.game.getTime() + 100;
    }
    
    movePlayerManager() {
        this.player.setVelocity(0);

        if (this.input.activePointer.isDown) {
            this.player.x = this.input.activePointer.x;
            // slighthly above finger position
            this.player.y = this.input.activePointer.y - 15;

            return;
        }

        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(gameSettings.playerSpeed);
        }

        if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }

    moveShip(ship, speed) {
        ship.y += speed;
        if (ship.y > config.height) {
            this.resetShipPos(ship);
        }
    }

    resetShipPos(ship) {
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
    }

    // Source @robmuh  on html5gamedevs.com
    // http://www.html5gamedevs.com/topic/36607-scaling-the-canvas-for-pixel-art/?do=findComment&comment=209927
    resize() {
        var canvas = this.game.canvas,
            width = window.innerWidth,
            height = window.innerHeight;
        var wratio = width / height,
            ratio = canvas.width / canvas.height;

        if (wratio < ratio) {
            canvas.style.width = width + "px";
            canvas.style.height = (width / ratio) + "px";
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }
}