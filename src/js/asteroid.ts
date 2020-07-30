import {BaseEntity} from './base-entity';
import Phaser from 'phaser';


export class Asteroid extends BaseEntity {

    constructor(scene: Phaser.Scene, x: number, y: number, key: string = 'asteroid') {
        var particles = scene.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 5,
            lifespan: {
                onEmit: (particle: Phaser.GameObjects.Particles.Particle, key: string, value: number) =>
                {
                    return Phaser.Math.Between( 200, 300 );
                }
            },
            scale: { start: 0.24, end: 0 },
            blendMode: 'ADD'
        });

        super(scene, x, y, key);

        this.body.setCircle(this.displayWidth * 0.5);

        emitter.startFollow(this);
    }

}