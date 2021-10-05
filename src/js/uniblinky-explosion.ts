
export class UniBlinkyExplosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'uniblinky-explosion');
        
        scene.add.existing(this);
        this.play( 'uniblinky.explode' );
    }
}