
export class BombarossaExplosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bombarossa-explosion');
        
        scene.add.existing(this);
        this.play( 'bombarossa_explosion.default' );
    }
}