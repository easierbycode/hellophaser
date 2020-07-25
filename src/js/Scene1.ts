import Phaser from 'phaser';
import spaceJSON from '../assets/images/space.json';


export class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame');  // bootGame will be the identifier for this scene
    }

    preload() {
        // this.load.image('asteroid', require('../assets/images/asteroid-face.png'));
        // this.load.image('background', './assets/images/background.png');
        // this.load.image('background', require('../assets/images/background.png'));

        // DRJ
        this.load.image('background', require('../assets/images/everwing-space-bg.png'));

        this.load.image( 'blue', require('../assets/images/blue.png'));
        
        this.load.image('red', require('../assets/images/red.png'));

        this.load.image('cola-machine', require('../assets/images/cola-machine-48x64-sheet.png'));

        this.load.spritesheet('cyborg-rider', require('../assets/spritesheets/cyborg-rider.png'), {
            frameWidth: 46,
            frameHeight: 32
        });
        
        this.load.image( 'eva-cola', require('../assets/spritesheets/eva-cola.png') );

        this.load.image( 'ship-boy', require('../assets/spritesheets/ship-boy.png') );

        this.load.spritesheet('human', require('../assets/spritesheets/human.png'), {
            frameWidth: 16,
            frameHeight: 27
        });
        
        this.load.spritesheet('ship', require('../assets/spritesheets/hatbot.png'), {
            frameWidth: 15,
            frameHeight: 10
        });
        
        this.load.spritesheet('ship2', require('../assets/spritesheets/asteroid-face.png'), {
            frameWidth: 33,
            frameHeight: 32
        });

        this.load.spritesheet('virus', require('../assets/spritesheets/virus.png'), {
            frameWidth: 29,
            frameHeight: 28
        });

        this.load.spritesheet('virus-explosion', require('../assets/spritesheets/virus-explosion.png'), {
            frameWidth: 64,
            frameHeight: 64
        });
        
        this.load.spritesheet('purple-sparks', require('../assets/spritesheets/purple-sparks.png'), {
            frameWidth: 204,
            frameHeight: 164
        });

        this.load.spritesheet('explosion', require('../assets/spritesheets/explosion.png'), {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet('power-up', require('../assets/spritesheets/SmilEye.png'), {
            frameWidth: 92,
            frameHeight: 82
        });

        this.load.spritesheet('player', require('../assets/spritesheets/player.png'), {
            frameWidth: 16,
            frameHeight: 24
        });

        this.load.spritesheet('beam', require('../assets/spritesheets/sperm.png'), {
            frameWidth: 6,
            frameHeight: 22
        });

        this.load.spritesheet('sentinel', require('../assets/spritesheets/sentinel.png'), {
            frameWidth: 87,
            frameHeight: 35
        });

        this.load.bitmapFont('pixelFont', require('../assets/font/font.png'), require('../assets/font/font.xml'));

        this.load.audio('audio_beam', [require('../assets/sounds/beam.ogg'), require('../assets/sounds/beam.mp3')]);
        this.load.audio('audio_explosion', [require('../assets/sounds/explosion.ogg'), require('../assets/sounds/explosion.mp3')]);
        this.load.audio('audio_pickup', [require('../assets/sounds/pickup.ogg'), require('../assets/sounds/pickup.mp3')]);
        this.load.audio( 'music', require('../assets/sounds/title-song-vbr (Mastered with Thunder at 100pct).mp3') );


        // DRJ- ERROR - `File.js:97 Uncaught TypeError: this.url.indexOf is not a function at JSONFile.File`
        // this.load.atlas( 'space', '../assets/images/space.png', spaceJSON );
        // DRJ- ERROR - `File.js:97 Uncaught TypeError: this.url.indexOf is not a function at JSONFile.File`
        // this.load.atlas( 'space', require('../assets/images/space.png'), spaceJSON );
        // this.load.atlas(({
            // key: 'space',
            // textureURL: '../assets/images/space.png',
            // DRJ- ERROR - `Phaser v3.23.0-FB (WebGL | Web Audio)  https://phaser.io File.js:97 Uncaught TypeError: this.url.indexOf is not a function at JSONFile.File`
            // atlasURL: spaceJSON
            // DRJ- ERROR - `VM556:1 Uncaught SyntaxError: Unexpected token < in JSON at position 0 at JSON.parse`
            // atlasURL: '../assets/images/space.json'
            // DRJ- ERROR - 'Local data URIs are not supported: space'
            // atlasURL: `data:application/json;base64,` + require( '../assets/images/space.json' )
            // DRJ- ERROR - `XHRLoader.js:70 Not allowed to load local resource: blob:application/json;base64,[object Object]`
            // atlasURL: `blob:application/json;base64,` + require( '../assets/images/space.json' )
        // });
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
            key: 'virus_anim',
            frames: this.anims.generateFrameNumbers('virus'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'virus_explode',
            frames: this.anims.generateFrameNumbers('virus-explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'purpleSparksExplode',
            frames: this.anims.generateFrameNumbers('purple-sparks'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'red',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 0,
                end: 19
            }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'gray',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 19,
                end: 0
            }),
            frameRate: 8,
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

        this.anims.create({
            key: 'drop_cargo',
            frames: this.anims.generateFrameNumbers('sentinel', {
                start: 0,
                end: 2
            }),
            frameRate: 8,
            repeat: 0,
            yoyo: true
        });

        this.anims.create({
            key: 'parachute',
            frames: this.anims.generateFrameNumbers( 'human' ),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'cyborg-rider',
            frames: this.anims.generateFrameNumbers( 'cyborg-rider' ),
            frameRate: 2,
            repeat: -1
        });
    }
}