import { config } from './config';
import { gameSettings } from './game-settings';

export class ModeSelect extends Phaser.Scene {
    constructor() {
        super('modeSelect');
    }

    create() {
        const centerX = config.width / 2;

        const title = this.add.text(centerX, 30, 'SELECT SOUND', {
            fontFamily: 'Arial',
            fontSize: '12px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const soundOn = this.add.text(centerX, config.height * 0.33, '🔊', {
            fontSize: '48px'
        }).setOrigin(0.5);

        const soundOff = this.add.text(centerX, config.height * 0.66, '🔇', {
            fontSize: '48px'
        }).setOrigin(0.5);

        const startWithSound = () => {
            gameSettings.playMusic = true;
            this.enterFullscreen();
            this.scene.start('playGame');
        };

        const startMuted = () => {
            gameSettings.playMusic = false;
            this.enterFullscreen();
            this.scene.start('playGame');
        };

        soundOn.setInteractive({ useHandCursor: true });
        soundOff.setInteractive({ useHandCursor: true });

        soundOn.on('pointerdown', startWithSound);
        soundOff.on('pointerdown', startMuted);

        this.tweens.add({
            targets: [soundOn, soundOff],
            alpha: 0.8,
            duration: 500,
            yoyo: true,
            repeat: -1
        });

        this.events.once('shutdown', () => {
            soundOn.off('pointerdown', startWithSound);
            soundOff.off('pointerdown', startMuted);
        });
    }

    private enterFullscreen() {
        if (!this.scale.isFullscreen) {
            this.scale.startFullscreen();
        }
    }
}
