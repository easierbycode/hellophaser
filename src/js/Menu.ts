import {config} from './config';
import {ScrollingBackground} from './scrolling-background';


export class Menu extends Phaser.Scene {

    constructor() {
        super('menu');
    }

    public preload(): void {
        this.load.image('startBtn', require('../assets/images/start-btn.png'));
        this.load.image('optionsBtn', require('../assets/images/options-btn.png'));
        this.load.image('starBg0', require('../assets/images/star-bg-0.png'));
        this.load.image('starBg1', require('../assets/images/star-bg-1.png'));
    }

    public create(): void {
        // start button
        const startBtn = this.add.sprite(config.width/2, config.height/2, 'startBtn');
        startBtn.setInteractive();
        startBtn.once('pointerdown', () => this.scene.start('playGame'));

        // options button
        let {x,y} = startBtn.getBottomCenter();
        const optionsBtn = this.add.sprite(x, y + startBtn.height, 'optionsBtn');

        this.backgrounds = [];
        for (var i = 0; i < 3; i++) {
            var keys = ["starBg0", "starBg1"];
            var key = keys[Phaser.Math.Between(0, keys.length - 1)];
            var bg = new ScrollingBackground(this, key, i * 10);
            this.backgrounds.push(bg);
        }
    }

    update() {
        for (var i = 0; i < this.backgrounds.length; i++) {
          this.backgrounds[i].update();
        }
    }

}