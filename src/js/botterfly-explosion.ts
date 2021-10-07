
export class BotterflyExplosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'botterfly-explosion');
        
        scene.add.existing(this);
        this.play( 'botterfly_explosion.default' );
    }
}