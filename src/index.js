import './style.css';
import 'phaser';
//import { SimpleScene } from './scenes/simple-scene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', './src/assets/sky.png');
    this.load.image('ground', './src/assets/platform.png');
    this.load.image('star', './src/assets/star.png');
    this.load.image('bomb', './src/assets/bomb.png');
    this.load.spritesheet('dude',
        './src/assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

var platforms;

function create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function update() {
}