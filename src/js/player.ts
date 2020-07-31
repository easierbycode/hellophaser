
import {Beam} from './beam.ts';
import {gameSettings} from './game-settings.ts';


export class Player extends Phaser.GameObjects.Sprite {
    
    constructor( scene: Phaser.Scene, x: number, y: number ) {
        super( scene, x, y, 'ship-boy' );
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
        this.setScale( 0.25 );
        this.emitter.startFollow( this );
        scene.add.existing( this );
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
        if ( this.alpha < 1 || this.active == false )  return;
        powerUp.disableBody( true, true );
        this.pickupSound.play();
    }
}