
export class Human extends Phaser.GameObjects.Sprite {

    constructor( scene: Phaser.Scene, x: number, y: number ) {
        super( scene, x, y, 'human' );
        scene.add.existing( this );
        scene.physics.world.enableBody( this );
        this.body.velocity.x = -25;
        this.body.velocity.y = 25;


        this.on( 'animationupdate', ( animation: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame, gameObject: Phaser.GameObjects.Sprite ) => {
            this.body.velocity.x = this.getVelocity( frame.textureFrame )
        } );


        this.play( 'parachute' );
    }

    getVelocity( frame ) {
        switch( frame ) { 
            case 0:  return -25;
            case 1:  return 0;
            case 2:  return 25;
            case 3:  return 0;
            default: return 0;
        }
    }

}