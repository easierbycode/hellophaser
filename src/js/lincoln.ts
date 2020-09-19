
import { Beam } from './beam.ts';
import { gameSettings } from './game-settings.ts';
import { Explosion } from './explosion';
import { config } from './config';
import { BaseEntity } from './base-entity';
import { LincolnFireball } from './lincoln-fireball';


export class Lincoln extends BaseEntity {
    
    constructor( scene: Phaser.Scene, x: number, y: number ) {
        super( scene, x, y, 'lincoln' );

        this.body.setCollideWorldBounds(true);
        
        this.nextShotAt = 0;

        this.beamSound = scene.sound.add( 'audio_beam', {
            volume: 0.4
        });
        this.pickupSound = scene.sound.add( 'audio_pickup', {
            volume: 0.4
        });
        
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
        this.emitter.startFollow( this );

        scene.anims.create({
            key: 'lincoln-fly',
            frames: [
                { key: 'lincoln', frame: 0 },
                { key: 'lincoln', frame: 1 },
            ],
            repeat: -1,
            frameRate: 2
        });
        scene.anims.create({
            key: 'lincoln-shoot',
            frames: [
                { key: 'lincoln', frame: 2 },
                { key: 'lincoln', frame: 3 }
            ],
            duration: 100
        });

        this.on('animationcomplete_lincoln-shoot', (anim, frame) => this.play( 'lincoln-fly', true ));

        this.play( 'lincoln-fly' );
    }

    damage( player, enemy ) {
        if ( this.alpha < 1 )  return;

        this.scene.resetShipPos( enemy );

        this.emitter.setVisible( false );

        this.alpha = 0.5;

        navigator.vibrate(Infinity);

        var explosion = new Explosion(this.scene, player.x, player.y);
        
        explosion.once(Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE, () => {
            this.setVisible( false );
            navigator.vibrate(0);
            this.resetPlayer();
        });
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
        this.play( 'lincoln-shoot' );
        var fireball = new LincolnFireball( this.scene );
        this.beamSound.play();
        this.nextShotAt = this.scene.game.getTime() + 100;
    }

    movePlayerManager() {
        this.body.setVelocity(0);

        if (this.scene.input.activePointer.isDown) {
            this.x = this.scene.input.activePointer.x;
            // slighthly above finger position
            this.y = this.scene.input.activePointer.y + (this.displayHeight / 2) - 15;

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