
export class PurpleSparks extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'purpleSparks');
        
        this.setScale( 0.25 )
        
        scene.add.existing(this);
        this.play( 'purpleSparksExplode' );
    }
}