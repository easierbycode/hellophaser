
export class LincolnFireball extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        let {x, y} = scene.player;
        x += 1;
        y -= 24;
        super(scene, x, y, 'lincoln-fireball');
        scene.add.existing(this);
        scene.anims.create({
            key: 'lincoln-fireball-anim',
            frames: scene.anims.generateFrameNumbers('lincoln-fireball'),
            frameRate: 30,
            repeat: -1
        });
        this.play('lincoln-fireball-anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;
        scene.projectiles.add(this);
    }

    update() {
        if (this.y < 32) {
            this.destroy();
        }
    }
}