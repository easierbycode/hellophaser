
import { Explosion } from './explosion.ts';
import { Human } from './human';


export class Sentinel extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super( scene, x, y, 'sentinel' );
        this.scene = scene;
        
        scene.add.existing( this );
        scene.physics.world.enableBody( this );
        this.body.velocity.x = 50;

        // this.play( 'drop_cargo' );
        this.health = 10;
    }

    damage( damagePoints = 1 ) {
        this.health -= damagePoints;
        if ( this.health == 0 ) {
            this.body.velocity.x = 0;
            this.play( 'drop_cargo' );
            setTimeout( () => {
                let {x, y} = this.getTopLeft();
                x += 61;
                y += 28;
                new Human( this.scene, x, y );

                setTimeout( () => {
                    this.destroy();
                }, 500 );
                
            }, 500 );
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