import { Explosion } from './explosion.ts';


export class HatbotGunner extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, x, y) {
        
        super( scene, x, y, 'hatbot-gunner' );
        
        this.scene = scene;
        
        scene.add.existing( this );
        scene.physics.world.enableBody( this );

        this.setOrigin( 1, 0 );
        this.body.velocity.x = 50;

        this.play( 'hatbot_gunner.default' );

        this.health = 20;

        this.on('animationcomplete-hatbot_gunner.aim_cannon', () => {
            this.scene.time.addEvent({
                delay: 1250,
                callback: () => {
                    this.anims && this.play( 'hatbot_gunner.default' );

                    this.scene && this.scene.time.addEvent({
                        delay: 2000,
                        callback: () => this.anims && this.play( 'hatbot_gunner.aim_cannon' )
                    })
                }
            })
        })

        scene.time.addEvent({
            delay: 2000,
            callback: () => this.anims && this.play( 'hatbot_gunner.aim_cannon' )
        })
    }

    damage( hatbotGunner, enemy ) {
        enemy.destroy();
        let damagePoints = enemy.damagePoints || 1;
        this.health -= damagePoints;
        if ( this.health == 0 ) {
            this.body.velocity.x = 0;
            
            this.destroy()
        } else {
            this.scene.juice.flash( this );
        }
    }

    destroy() {
        new Explosion(this.scene, this.getBottomLeft().x + 16, this.y);
        new Explosion(this.scene, this.getBottomCenter().x, this.y);
        new Explosion(this.scene, this.getRightCenter().x - 16, this.y);
        this.scene.explosionSound.play();
        setTimeout( () => { super.destroy() }, 100 );
    }
}