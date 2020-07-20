import {config} from './config';
import {Scene1} from './Scene1';
import {ScrollingBackground} from './scrolling-background';
import {AlignGrid} from './utilities/alignGrid.ts';


export class Menu extends Phaser.Scene {

    constructor() {
        super('menu');
        this.scene1 = new Scene1();
    }

    makeAlignGrid(r = 11, c = 11) {
        this.aGrid = new AlignGrid({
            scene: this,
            rows: r,
            cols: c
        });
    }

    public preload(): void {
        this.scene1.preload.call(this);
        this.load.image('startBtn', require('../assets/images/start-btn.png'));
        // this.load.image('optionsBtn', require('../assets/images/options-btn.png'));
        this.load.image('optionsBtn', require('../assets/images/RonaGun-logo.png'));
        this.load.image('starBg0', require('../assets/images/star-bg-0.png'));
        this.load.image('starBg1', require('../assets/images/star-bg-1.png'));
    }

    public create(): void {
        this.scene1.create.call(this);

        this.makeAlignGrid(11, 11);
        // DRJ- debug
        this.aGrid.showNumbers();

        // start button
        const startBtn = this.add.sprite(config.width/2, config.height/2, 'startBtn');
        startBtn.setInteractive();
        startBtn.once('pointerdown', () => this.scene.start('playGame'));

        // options button
        let {x,y} = startBtn.getBottomCenter();
        const optionsBtn = this.add.sprite(x, y + startBtn.height, 'optionsBtn');

        //DRJ

        optionsBtn.setScale( 0.5 )

        console.log( 'startBtn.width: ', startBtn.width )
        console.log( 'startBtn.height: ', startBtn.height )
        console.log( 'startBtn x: ', x )
        console.log( 'startBtn y: ', y )

        const virusIcon = this.add.sprite( x - startBtn.width, y - startBtn.height/2, 'virus', 0 )

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