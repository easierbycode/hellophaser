
import { Explosion } from './explosion.ts';
import { Human } from './human';


export class Sentinel extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        
        super( scene, x, y, 'sentinel' );
        // super( scene, x, y, 'mars-dodo' );
        // super( scene, x, y, 'monkey-flying-carpet' );
        // super( scene, x, y, 'clown-balloons' );
        // super( scene, x, y, 'ronald' );
        
        this.scene = scene;
        
        scene.add.existing( this );
        scene.physics.world.enableBody( this );
        this.body.velocity.x = 50;

        this.play( 'drop_cargo' );

        // this.play( 'mars_dodo.default' );
        // this.play( 'monkey_flying_carpet.default' );
        // this.play( 'clown_balloons.default' );
        // this.play( 'ronald.default' );

        this.health = 10;
    }

    damage( sentinel, enemy ) {
        enemy.destroy();
        let damagePoints = enemy.damagePoints || 1;
        this.health -= damagePoints;
        if ( this.health == 0 ) {
            this.body.velocity.x = 0;
            
            // this.play( 'monkey_flying_carpet.hit' );
            // this.play( 'clown_balloons.hit' );
            
            setTimeout( () => {
                let {x, y} = this.getTopLeft();
                x += 61;
                y += 28;
                new Human( this.scene, x, y );

                setTimeout( () => {
                    this.destroy();
                }, 500 );
                
            }, 500 );
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