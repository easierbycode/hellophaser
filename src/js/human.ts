
const MAXSPEED = 25;


export class Human extends Phaser.GameObjects.Sprite {

    constructor( scene: Phaser.Scene, x: number, y: number ) {
        
        // super( scene, x, y, 'human' );
        super( scene, x, y, 'fairy' );
        
        scene.add.existing( this );
        scene.physics.world.enableBody( this );
        this.body.velocity.x = -MAXSPEED;
        this.body.velocity.y = MAXSPEED;

        this.on( 'animationupdate', ( animation: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame, gameObject: Phaser.GameObjects.Sprite ) => {
            this.body.velocity.x = this.getVelocity( frame.textureFrame );
            //  squish and rotate for illusion of 'banking'
            let bank : number = this.body.velocity.x / MAXSPEED;
            gameObject.setScale( (1 - (Math.abs( bank ) / 5)) );
            // this.angle = 180 - bank * 20;
            this.angle = 0 - (bank * 20);
        } );

        this.play( 'parachute' );
    }

    getVelocity( frame ) {
        switch( frame ) { 
            case 0:  return -MAXSPEED;
            case 1:  return 0;
            case 2:  return MAXSPEED;
            case 3:  return 0;
            default: return 0;
        }
    }

}