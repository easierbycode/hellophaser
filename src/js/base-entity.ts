import Phaser from 'phaser';


export class BaseEntity extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
        super(scene, x, y, key);

        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
    }

}