
export class EyeFlyExplosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'eye-fly-explosion');
        
        scene.add.existing(this);
        this.play( 'eye_fly.explode' );
    }
}