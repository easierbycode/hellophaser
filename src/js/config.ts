import {Menu} from './Menu.ts';
import {Scene2} from './Scene2.ts';


export var config = {
    width: 256,
    height: 272,
    scene: [Menu, Scene2],
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};