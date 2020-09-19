import {Menu} from './Menu.ts';
import {Scene2} from './Scene2.ts';
import phaserJuice from './phaserJuicePlugin.min.js';


export var config = {
    width: 256,
    height: 272,
    plugins: {
        scene: [
            { key: 'phaserJuice', plugin: phaserJuice, mapping: 'juice' }
        ]
    },
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
    },

    canvasStyle: 'image-rendering: pixelated;'
};