import Phaser from 'phaser';
import spaceJSON from '../assets/images/space.json';


export class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame');  // bootGame will be the identifier for this scene
    }

    preload() {
        this.load.image( 'angry-nerd', require('../assets/images/angry-nerd.png'));
        
        this.load.image( 'blue', require('../assets/images/blue.png'));
        
        this.load.image('red', require('../assets/images/red.png'));

        this.load.image('cola-machine', require('../assets/images/cola-machine-48x64-sheet.png'));

        this.load.spritesheet('cyborg-rider', require('../assets/spritesheets/cyborg-rider.png'), {
            frameWidth: 46,
            frameHeight: 32
        });
        
        this.load.image( 'D', require('../assets/images/D.png') );
        
        this.load.image( 'eva-cola', require('../assets/spritesheets/eva-cola.png') );

        this.load.image( 'fairy-bullet', require('../assets/images/fairy-bullet.png'));
        
        this.load.image( 'star', require('../assets/images/star.png'));

        this.load.spritesheet( 'genie' , require('../assets/spritesheets/genie.png'), {
            frameWidth: 76,
            frameHeight: 58
        });

        this.load.spritesheet( 'ship-boy', require('../assets/spritesheets/ship-boy.png'), {
            frameWidth: 117,
            frameHeight: 142
        });

        this.load.spritesheet( 'hatbot' , require('../assets/spritesheets/hatbot.png'), {
            frameWidth: 15,
            frameHeight: 10
        });
        
        this.load.spritesheet( 'hatbot-gunner' , require('../assets/spritesheets/hatbot-gunner.png'), {
            frameWidth: 32,
            frameHeight: 42
        });

        this.load.spritesheet( 'hatbot-jetpack' , require('../assets/spritesheets/hatbot-jetpack.png'), {
            frameWidth: 27,
            frameHeight: 25
        });

        this.load.spritesheet('human', require('../assets/spritesheets/human.png'), {
            frameWidth: 16,
            frameHeight: 27
        });

        this.load.spritesheet('joker', require('../assets/spritesheets/joker.png'), {
            frameWidth: 38,
            frameHeight: 40
        });

        this.load.spritesheet('joker-bag', require('../assets/spritesheets/joker-bag.png'), {
            frameWidth: 36,
            frameHeight: 42
        });

        this.load.spritesheet('joker-bag-dialog', require('../assets/spritesheets/joker-bag-dialog.png'), {
            frameWidth: 98,
            frameHeight: 29
        });

        this.load.spritesheet('joker-ball', require('../assets/spritesheets/joker-ball.png'), {
            frameWidth: 16,
            frameHeight: 15
        });

        this.load.spritesheet('joker-ball-shockwave-1', require('../assets/spritesheets/joker-ball-shockwave-1.png'), {
            frameWidth: 51,
            frameHeight: 26
        });

        this.load.spritesheet('joker-ball-shockwave-2-l', require('../assets/spritesheets/joker-ball-shockwave-2-l.png'), {
            frameWidth: 32,
            frameHeight: 33
        });

        this.load.spritesheet('joker-ball-shockwave-2-r', require('../assets/spritesheets/joker-ball-shockwave-2-r.png'), {
            frameWidth: 35,
            frameHeight: 32
        });

        this.load.spritesheet('lincoln', require('../assets/spritesheets/lincoln.png'), {
            frameWidth: 27,
            frameHeight: 58
        });
        this.load.spritesheet('lincoln-fireball', require('../assets/spritesheets/lincoln-fireball.png'), {
            frameWidth: 9,
            frameHeight: 22
        });
        
        this.load.spritesheet('monkey-flying-carpet', require('../assets/spritesheets/monkey-flying-carpet.png'), {
            frameWidth: 40,
            frameHeight: 29
        });

        this.load.spritesheet('mouthman', require('../assets/spritesheets/mouthman.png'), {
            frameWidth: 64,
            frameHeight: 64
        });
        

        this.load.spritesheet('ufo', require('../assets/spritesheets/ufo.png'), {
            frameWidth: 32,
            frameHeight: 30
        });

<<<<<<< HEAD
        this.load.spritesheet('uniblinky', require('../assets/spritesheets/voxel-uniblinky.png'), {
            frameWidth: 230,
            frameHeight: 232
        });

        this.load.spritesheet('uniblinky-particles', require('../assets/spritesheets/voxel-uniblinky-particles.png'), {
            frameWidth: 17,
=======
        this.load.spritesheet('voxel-virus', require('../assets/spritesheets/voxel-virus.png'), {
            frameWidth: 218,
            frameHeight: 221
        });

        this.load.spritesheet('voxel-virus-particles', require('../assets/spritesheets/voxel-virus-particles.png'), {
            frameWidth: 33,
            frameHeight: 35
        });

        this.load.spritesheet('voxel-wizrobe', require('../assets/spritesheets/voxel-wizrobe.png'), {
            frameWidth: 253,
            frameHeight: 222
        });

        this.load.spritesheet('voxel-wizrobe-particles', require('../assets/spritesheets/voxel-wizrobe-particles.png'), {
            frameWidth: 16,
>>>>>>> add9c4aa8004f5220c345c653e1c3fc6885182aa
            frameHeight: 16
        });

        this.load.spritesheet('alien-skull', require('../assets/spritesheets/alien-skull.png'), {
            frameWidth: 32,
            frameHeight: 32
        });
        
        this.load.spritesheet('asteroid', require('../assets/spritesheets/asteroid-face.png'), {
            frameWidth: 33,
            frameHeight: 32
        });

        this.load.spritesheet('bombarossa', require('../assets/spritesheets/bombarossa.png'), {
            frameWidth: 20,
            frameHeight: 16
        });

        this.load.spritesheet('bombarossa-explosion', require('../assets/spritesheets/bombarossa-explosion.png'), {
            frameWidth: 47,
            frameHeight: 47
        });

        this.load.spritesheet('goblin', require('../assets/spritesheets/goblin.png'), {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet('ufo-explosion', require('../assets/spritesheets/ufo-explosion.png'), {
            frameWidth: 32,
            frameHeight: 30
        });

        this.load.spritesheet('virus', require('../assets/spritesheets/virus.png'), {
            frameWidth: 29,
            frameHeight: 28
        });

        this.load.spritesheet('virus-v2', require('../assets/spritesheets/virus-v2.png'), {
            frameWidth: 21,
            frameHeight: 18
        });

        this.load.spritesheet('virus-explosion', require('../assets/spritesheets/virus-explosion.png'), {
            frameWidth: 64,
            frameHeight: 64
        });
        
        this.load.spritesheet('purple-sparks', require('../assets/spritesheets/purple-sparks.png'), {
            frameWidth: 204,
            frameHeight: 164
        });

        this.load.spritesheet('blue-angel', require('../assets/spritesheets/blue-angel.png'), {
            frameWidth: 70,
            frameHeight: 55
        });

        this.load.spritesheet('botterfly', require('../assets/spritesheets/botterfly.png'), {
            frameWidth: 64,
            frameHeight: 32
        });
        this.load.spritesheet('botterfly-explosion', require('../assets/spritesheets/botterfly-explosion.png'), {
            frameWidth: 38,
            frameHeight: 40
        });

        this.load.spritesheet('cheerleader-blonde', require('../assets/spritesheets/cheerleader-blonde.png'), {
            frameWidth: 48,
            frameHeight: 35
        });

        this.load.spritesheet('clown-balloons', require('../assets/spritesheets/clown-balloons.png'), {
            frameWidth: 32,
            frameHeight: 63
        });

        this.load.spritesheet('cy-brain', require('../assets/spritesheets/cy-brain.png'), {
            frameWidth: 48,
            frameHeight: 48
        });

        this.load.spritesheet('explosion', require('../assets/spritesheets/explosion.png'), {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet('eye-fly', require('../assets/spritesheets/eye-fly.png'), {
            frameWidth: 32,
            frameHeight: 16
        });

        this.load.spritesheet('eye-fly-explosion', require('../assets/spritesheets/eye-fly-explosion.png'), {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet('fairy', require('../assets/spritesheets/fairy.png'), {
            frameWidth: 36,
            frameHeight: 41
        });

        this.load.spritesheet('fairy-bullet-impact', require('../assets/spritesheets/fairy-bullet-impact.png'), {
            frameWidth: 16,
            frameHeight: 15
        });

        this.load.spritesheet('fairy-bullet-particles', require('../assets/spritesheets/fairy-bullet-particles.png'), {
            frameWidth: 16,
            frameHeight: 15
        });

        this.load.spritesheet('floppy', require('../assets/spritesheets/floppy.png'), {
            frameWidth: 38,
            frameHeight: 41
        });

        this.load.spritesheet('mars-dodo', require('../assets/spritesheets/mars-dodo.png'), {
            frameWidth: 41,
            frameHeight: 44
        });

        this.load.spritesheet('power-up', require('../assets/spritesheets/SmilEye.png'), {
            frameWidth: 92,
            frameHeight: 82
        });

        this.load.spritesheet('player', require('../assets/spritesheets/player.png'), {
            frameWidth: 16,
            frameHeight: 24
        });

        this.load.spritesheet('ronald', require('../assets/spritesheets/ronald.png'), {
            frameWidth: 38,
            frameHeight: 94
        });

        this.load.spritesheet('beam', require('../assets/spritesheets/sperm.png'), {
            frameWidth: 6,
            frameHeight: 22
        });

        this.load.spritesheet('seductress', require('../assets/spritesheets/seductress-flying.png'), {
            frameWidth: 271,
            frameHeight: 171
        });

        this.load.spritesheet('sentinel', require('../assets/spritesheets/sentinel.png'), {
            frameWidth: 87,
            frameHeight: 35
        });

        this.load.spritesheet('uniblinky', require('../assets/spritesheets/uniblinky.png'), {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet('uniblinky-explosion', require('../assets/spritesheets/uniblinky-explosion.png'), {
            frameWidth: 16,
            frameHeight: 16
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
            key: 'ufo.default',  // ID for this animation
            frames: this.anims.generateFrameNumbers('ufo'),  // array of frames
            frameRate: 4,  // animation speed - frames per second
            repeat: -1  // will it loop?  -1 for infinite
        });

        this.anims.create({
            key: 'asteroid_anim',
            frames: this.anims.generateFrameNumbers('asteroid'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'alien_skull.aim_cannon',
            frames: this.anims.generateFrameNames('alien-skull', {
                start: 2,
                end: 3
            }),
            frameRate: 4
        });
        this.anims.create({
            key: 'alien_skull.default',
            frames: [
                {key:'alien-skull', frame:0},
                {key:'alien-skull', frame:1}
            ],
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'bombarossa.default',
            frames: this.anims.generateFrameNumbers('bombarossa'),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'bombarossa_explosion.default',
            frames: this.anims.generateFrameNumbers('bombarossa-explosion'),
            frameRate: 24,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'botterfly.default',
            frames: this.anims.generateFrameNumbers('botterfly'),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'botterfly_explosion.default',
            frames: this.anims.generateFrameNumbers('botterfly-explosion'),
            frameRate: 24,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'blue_angel.default',
            frames: [
                {key:'blue-angel', frame:0},
                {key:'blue-angel', frame:1}
            ],
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'blue_angel.aim',
            frames: [
                {key:'blue-angel', frame:2}
            ],
            frameRate: 1
        });

        this.anims.create({
            key: 'cheerleader_blonde.default',
            frames: [
                {key:'cheerleader-blonde', frame:0},
                {key:'cheerleader-blonde', frame:1}
            ],
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'clown_balloons.default',
            frames: [
                {key:'clown-balloons', frame:0},
                {key:'clown-balloons', frame:1}
            ],
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'clown_balloons.hit',
            frames: [
                {key:'clown-balloons', frame:2},
                {key:'clown-balloons', frame:3}
            ],
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'cy_brain.default',
            frames: this.anims.generateFrameNumbers('cy-brain', {
                start: 0,
                end: 1
            }),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'eye_fly.default',
            frames: this.anims.generateFrameNumbers('eye-fly'),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'eye_fly.explode',
            frames: this.anims.generateFrameNumbers('eye-fly-explosion'),
            frameRate: 24,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'floppy.default',
            frames: this.anims.generateFrameNumbers('floppy'),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'goblin.default',
            frames: this.anims.generateFrameNumbers('goblin'),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'hatbot.default',
            frames: this.anims.generateFrameNames('hatbot'),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'hatbot_gunner.aim_cannon',
            frames: this.anims.generateFrameNames('hatbot-gunner'),
            frameRate: 4
        });
        this.anims.create({
            key: 'hatbot_gunner.default',
            frames: [
                {key:'hatbot-gunner', frame:0}
            ],
            frameRate: 1
        });

        this.anims.create({
            key: 'hatbot_jetpack.default',
            frames: this.anims.generateFrameNumbers('hatbot-jetpack'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'fairy_bullet_impact.default',
            frames: this.anims.generateFrameNumbers('fairy-bullet-impact'),
            frameRate: 20
        });

        this.anims.create({
            key: 'mars_dodo.default',
            frames: this.anims.generateFrameNumbers('mars-dodo'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'monkey_flying_carpet.default',
            frames: [
                {key:'monkey-flying-carpet', frame:0},
                {key:'monkey-flying-carpet', frame:1}
            ],
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'monkey_flying_carpet.hit',
            frames: [
                {key:'monkey-flying-carpet', frame:2},
                {key:'monkey-flying-carpet', frame:3}
            ],
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'mouthman.default',
            frames: this.anims.generateFrameNumbers('mouthman'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'ronald.default',
            frames: [
                {key:'ronald', frame:0}
            ],
            frameRate: 1
        });

        this.anims.create({
            key: 'seductress.default',
            frames: [
                {key:'seductress', frame:0}
            ],
            frameRate: 1
        });
        this.anims.create({
            key: 'seductress.morph',
            frames: this.anims.generateFrameNumbers('seductress', {
                start: 0,
                end: 9
            }),
            frameRate: 4
        });
        this.anims.create({
            key: 'seductress.stand',
            frames: [
                ...this.anims.generateFrameNumbers('seductress', {
                    start: 10,
                    end: 16
                }),
                {key: 'seductress', frame: 15},
                {key: 'seductress', frame: 14},
                {key: 'seductress', frame: 13},
                {key: 'seductress', frame: 14},
                {key: 'seductress', frame: 15},
                {key: 'seductress', frame: 16},
                {key: 'seductress', frame: 15},
                {key: 'seductress', frame: 14},
                {key: 'seductress', frame: 13},
                {key: 'seductress', frame: 14},
                {key: 'seductress', frame: 15},
                {key: 'seductress', frame: 16}
            ],
            frameRate: 8
        });
        this.anims.create({
            key: 'seductress.launch',
            frames: this.anims.generateFrameNumbers('seductress', {
                start: 16,
                end: 18
            }),
            frameRate: 8
        });
        this.anims.create({
            key: 'seductress.fly',
            frames: this.anims.generateFrameNumbers('seductress', {
                start: 19,
                end: 23
            }),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'uniblinky.default',
            frames: this.anims.generateFrameNumbers('uniblinky'),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'uniblinky.explode',
            frames: this.anims.generateFrameNumbers('uniblinky-explosion'),
            frameRate: 30,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'virus.default',
            frames: this.anims.generateFrameNumbers('virus'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'virus_v2.default',
            frames: this.anims.generateFrameNumbers('virus-v2'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'ufo_explode',
            frames: this.anims.generateFrameNumbers('ufo-explosion'),
            frameRate: 30,
            repeat: 0,
            hideOnComplete: true
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
        // this.anims.create({
        //     key: 'parachute',
        //     frames: this.anims.generateFrameNumbers( 'fairy', {
        //         start: 0,
        //         end: 3
        //     }),
        //     frameRate: 1,
        //     repeat: -1
        // });

        this.anims.create({
            key: 'cyborg-rider',
            frames: this.anims.generateFrameNumbers( 'cyborg-rider' ),
            frameRate: 2,
            repeat: -1
        });
    }
}