
export class Explosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'explosion');
        
        // DRJ
        this.setScale( 0.25 )
        
        scene.add.existing(this);
        this.play('explode');
    }
}