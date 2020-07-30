
export class UfoExplosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'ufo-explosion');
        
        scene.add.existing(this);
        this.play( 'ufo_explode' );
    }
}