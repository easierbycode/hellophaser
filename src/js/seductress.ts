import { Explosion } from './explosion.ts';


export class Seductress extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        
        super( scene, x, y, 'seductress' );
        
        this.scene = scene;
        
        scene.add.existing( this );
        scene.physics.world.enableBody( this );

        this.setOrigin( 1, 0 );
        this.body.velocity.x = 50;

        this.play( 'seductress.default' );

        this.health = 20;

        this.on('animationcomplete-seductress.morph', () => this.play( 'seductress.stand' ))
        this.on('animationcomplete-seductress.stand', () => this.play( 'seductress.launch' ))
        this.on('animationcomplete-seductress.launch', () => this.play( 'seductress.fly' ))
    }

    damage( sentinel, enemy ) {
        enemy.destroy();
        let damagePoints = enemy.damagePoints || 1;
        this.health -= damagePoints;
        if ( this.health == 0 ) {
            this.body.velocity.x = 0;
            
            // this.destroy()
            this.play( 'seductress.morph' );
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