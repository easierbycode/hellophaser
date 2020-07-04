import Phaser from 'phaser';


export class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame');  // bootGame will be the identifier for this scene
    }

    preload() {
        this.load.image('asteroid', require('../assets/images/asteroid-face.png'));
        // this.load.image('background', './assets/images/background.png');
        this.load.image('background', require('../assets/images/background.png'));
        this.load.image('red', require('../assets/images/red.png'));

        // this.load.spritesheet('ship', require('../assets/spritesheets/ship.png'), {
        //     frameWidth: 16,
        //     frameHeight: 16
        // });
        this.load.spritesheet('ship', require('../assets/spritesheets/hatbot.png'), {
            frameWidth: 15,
            frameHeight: 10
        });
        // this.load.spritesheet('ship2', require('../assets/spritesheets/ship2.png'), {
        //     frameWidth: 32,
        //     frameHeight: 16
        // });
        this.load.spritesheet('ship2', require('../assets/spritesheets/asteroid-face.png'), {
            frameWidth: 33,
            frameHeight: 32
        });
        // this.load.spritesheet('ship3', require('../assets/spritesheets/ship3.png'), {
        //     frameWidth: 32,
        //     frameHeight: 32
        // });
        this.load.spritesheet('ship3', require('../assets/spritesheets/virus.png'), {
            frameWidth: 29,
            frameHeight: 28
        });
        this.load.spritesheet('explosion', require('../assets/spritesheets/explosion.png'), {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet('power-up', require('../assets/spritesheets/power-up.png'), {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet('player', require('../assets/spritesheets/player.png'), {
            frameWidth: 16,
            frameHeight: 24
        });
        this.load.spritesheet('beam', require('../assets/spritesheets/beam.png'), {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.bitmapFont('pixelFont', require('../assets/font/font.png'), require('../assets/font/font.xml'));

        this.load.audio('audio_beam', [require('../assets/sounds/beam.ogg'), require('../assets/sounds/beam.mp3')]);
        this.load.audio('audio_explosion', [require('../assets/sounds/explosion.ogg'), require('../assets/sounds/explosion.mp3')]);
        this.load.audio('audio_pickup', [require('../assets/sounds/pickup.ogg'), require('../assets/sounds/pickup.mp3')]);
        this.load.audio('music', [require('../assets/sounds/sci-fi_platformer12.ogg'), require('../assets/sounds/sci-fi_platformer12.mp3')]);
    }

    create() {
        // this.add.text(20, 20, 'Loading game...');
        // this.scene.start('menu');

        this.anims.create({
            key: 'ship1_anim',  // ID for this animation
            frames: this.anims.generateFrameNumbers('ship'),  // array of frames
            frameRate: 20,  // animation speed - frames per second
            repeat: -1  // will it loop?  -1 for infinite
        });

        this.anims.create({
            key: 'ship2_anim',
            frames: this.anims.generateFrameNumbers('ship2'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'ship3_anim',
            frames: this.anims.generateFrameNumbers('ship3'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'red',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'gray',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'thrust',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'beam_anim',
            frames: this.anims.generateFrameNumbers('beam'),
            frameRate: 20,
            repeat: -1
        });
    }
}