
import {Beam} from './beam.ts';
import {gameSettings} from './game-settings.ts';
import { Explosion } from './explosion';
import { config } from './config';


export class D extends Phaser.GameObjects.Sprite {
    
    constructor( scene: Phaser.Scene, x: number, y: number ) {
        super( scene, x, y, 'D' );
        scene.physics.world.enableBody( this );

        this.beamSound = scene.sound.add( 'audio_beam' );
        this.pickupSound = scene.sound.add( 'audio_pickup' );
        
        this.cursorKeys = scene.input.keyboard.createCursorKeys();

        var particles = scene.add.particles( 'blue' );

        this.emitter = particles.createEmitter({
            speed: 125,
            lifespan: {
                onEmit: (particle, key, t, value) =>
                {
                    return Phaser.Math.Between( 200, 300 );
                }
            },
            angle: {
                onEmit: (particle, key, t, value) =>
                {
                    var v = Phaser.Math.Between(-15, 15);
                    return (this.angle - 270) + v;
                }
            },
            scale: { start: 0.275, end: 0 },
            blendMode: 'ADD'
        });

        this.nextShotAt = 0;
        this.scene = scene;

        this.body.setCollideWorldBounds(true);
        this.setScale( 0.10 );
        this.emitter.startFollow( this );

        scene.add.existing( this );
    }

    damage( player, enemy ) {
        if ( this.alpha < 1 )  return;

        this.scene.resetShipPos( enemy );

        this.emitter.setVisible( false );

        this.alpha = 0.5;

        navigator.vibrate(Infinity);

        var explosion = new Explosion(this.scene, player.x, player.y);
        
        this.setVisible( false );
        navigator.vibrate(0);
        this.resetPlayer();
    }

    resetPlayer() {
        var x = config.width / 2 - 8;
        var y = config.height + 64;

        this.x = x;
        this.y = y;
        this.setVisible( true );

        var tween = this.scene.tweens.add({
            targets: this,
            y: config.height - 64,
            ease: 'Power1',
            duration: 1500,
            repeat: 0,
            onComplete: function() {
                this.alpha = 1;
                this.emitter.setVisible( true );
            },
            callbackScope: this
        });
    }

    shoot() {
        if (this.nextShotAt > this.scene.game.getTime())  return;
        var beam = new Beam(this.scene);
        this.beamSound.play();
        this.nextShotAt = this.scene.game.getTime() + 100;
    }

    movePlayerManager() {
        this.body.setVelocity(0);

        if (this.scene.input.activePointer.isDown) {
            this.x = this.scene.input.activePointer.x;
            // slighthly above finger position
            this.y = this.scene.input.activePointer.y - 15;

            return;
        }

        if (this.cursorKeys.left.isDown) {
            this.body.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.right.isDown) {
            this.body.setVelocityX(gameSettings.playerSpeed);
        }

        if (this.cursorKeys.up.isDown) {
            this.body.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown) {
            this.body.setVelocityY(gameSettings.playerSpeed);
        }
    }

    pickPowerUp( player, powerUp ) {
        if ( this.alpha < 1 )  return;
        powerUp.disableBody( true, true );
        this.pickupSound.play();
    }
}