
export class VirusExplosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'virus-explosion');
        
        scene.add.existing(this);
        this.play( 'virus_explode' );
    }
}