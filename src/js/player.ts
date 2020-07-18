
export class Player extends Phaser.GameObjects.Sprite {
    
    constructor( scene, x, y ) {
        super( scene, x, y, 'ship-boy' );
        scene.physics.world.enableBody( this );

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

        this.body.setCollideWorldBounds(true);
        this.setScale( 0.25 );
        this.emitter.startFollow( this );
        scene.add.existing( this );

        console.log( this.emitter );
    }

}