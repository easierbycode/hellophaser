
export class Player extends Phaser.GameObjects.Sprite {
    
    constructor( scene, x, y ) {
        super( scene, x, y, 'eva-cola' );
        
        scene.add.existing( this );
        scene.physics.world.enableBody( this );

        this.body.setCollideWorldBounds(true);

        this.setScale( 0.015 );
    }

}