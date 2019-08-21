// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/images/background.png":[function(require,module,exports) {
module.exports = "/background.7130a664.png";
},{}],"assets/spritesheets/ship.png":[function(require,module,exports) {
module.exports = "/ship.295ecc3d.png";
},{}],"assets/spritesheets/ship2.png":[function(require,module,exports) {
module.exports = "/ship2.b6aa153b.png";
},{}],"assets/spritesheets/ship3.png":[function(require,module,exports) {
module.exports = "/ship3.487a71a6.png";
},{}],"assets/spritesheets/explosion.png":[function(require,module,exports) {
module.exports = "/explosion.981e5dfd.png";
},{}],"assets/spritesheets/power-up.png":[function(require,module,exports) {
module.exports = "/power-up.6dbac5e4.png";
},{}],"assets/spritesheets/player.png":[function(require,module,exports) {
module.exports = "/player.37adab0e.png";
},{}],"assets/spritesheets/beam.png":[function(require,module,exports) {
module.exports = "/beam.92fa7d83.png";
},{}],"assets/font/font.png":[function(require,module,exports) {
module.exports = "/font.f04c4cff.png";
},{}],"assets/font/font.xml":[function(require,module,exports) {
module.exports = "/font.dd5306fc.xml";
},{}],"assets/sounds/beam.ogg":[function(require,module,exports) {
module.exports = "/beam.c781a550.ogg";
},{}],"assets/sounds/beam.mp3":[function(require,module,exports) {
module.exports = "/beam.eb9b47c3.mp3";
},{}],"assets/sounds/explosion.ogg":[function(require,module,exports) {
module.exports = "/explosion.94e57242.ogg";
},{}],"assets/sounds/explosion.mp3":[function(require,module,exports) {
module.exports = "/explosion.808da144.mp3";
},{}],"assets/sounds/pickup.ogg":[function(require,module,exports) {
module.exports = "/pickup.a81bdb37.ogg";
},{}],"assets/sounds/pickup.mp3":[function(require,module,exports) {
module.exports = "/pickup.68fdd135.mp3";
},{}],"assets/sounds/sci-fi_platformer12.ogg":[function(require,module,exports) {
module.exports = "/sci-fi_platformer12.d94a9afd.ogg";
},{}],"js/Scene1.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scene1 =
/** @class */
function (_super) {
  __extends(Scene1, _super);

  function Scene1() {
    return _super.call(this, 'bootGame') || this;
  }

  Scene1.prototype.preload = function () {
    // this.load.image('background', './assets/images/background.png');
    this.load.image('background', require('../assets/images/background.png'));
    this.load.spritesheet('ship', require('../assets/spritesheets/ship.png'), {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('ship2', require('../assets/spritesheets/ship2.png'), {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet('ship3', require('../assets/spritesheets/ship3.png'), {
      frameWidth: 32,
      frameHeight: 32
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
    this.load.audio('music', [require('../assets/sounds/sci-fi_platformer12.ogg'), require('../assets/sounds/sci-fi_platformer12.ogg')]);
  };

  Scene1.prototype.create = function () {
    this.add.text(20, 20, 'Loading game...');
    this.scene.start('playGame');
    this.anims.create({
      key: 'ship1_anim',
      frames: this.anims.generateFrameNumbers('ship'),
      frameRate: 20,
      repeat: -1 // will it loop?  -1 for infinite

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
  };

  return Scene1;
}(Phaser.Scene);

exports.Scene1 = Scene1;
},{"../assets/images/background.png":"assets/images/background.png","../assets/spritesheets/ship.png":"assets/spritesheets/ship.png","../assets/spritesheets/ship2.png":"assets/spritesheets/ship2.png","../assets/spritesheets/ship3.png":"assets/spritesheets/ship3.png","../assets/spritesheets/explosion.png":"assets/spritesheets/explosion.png","../assets/spritesheets/power-up.png":"assets/spritesheets/power-up.png","../assets/spritesheets/player.png":"assets/spritesheets/player.png","../assets/spritesheets/beam.png":"assets/spritesheets/beam.png","../assets/font/font.png":"assets/font/font.png","../assets/font/font.xml":"assets/font/font.xml","../assets/sounds/beam.ogg":"assets/sounds/beam.ogg","../assets/sounds/beam.mp3":"assets/sounds/beam.mp3","../assets/sounds/explosion.ogg":"assets/sounds/explosion.ogg","../assets/sounds/explosion.mp3":"assets/sounds/explosion.mp3","../assets/sounds/pickup.ogg":"assets/sounds/pickup.ogg","../assets/sounds/pickup.mp3":"assets/sounds/pickup.mp3","../assets/sounds/sci-fi_platformer12.ogg":"assets/sounds/sci-fi_platformer12.ogg"}],"js/beam.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Beam =
/** @class */
function (_super) {
  __extends(Beam, _super);

  function Beam(scene) {
    var _this = this;

    var _a = scene.player,
        x = _a.x,
        y = _a.y;
    y -= 16;
    _this = _super.call(this, scene, x, y, 'beam') || this;
    scene.add.existing(_this);

    _this.play('beam_anim');

    scene.physics.world.enableBody(_this);
    _this.body.velocity.y = -250;
    scene.projectiles.add(_this);
    return _this;
  }

  Beam.prototype.update = function () {
    if (this.y < 32) {
      this.destroy();
    }
  };

  return Beam;
}(Phaser.GameObjects.Sprite);

exports.Beam = Beam;
},{}],"js/game-settings.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameSettings = {
  playerSpeed: 200
};
},{}],"js/explosion.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Explosion =
/** @class */
function (_super) {
  __extends(Explosion, _super);

  function Explosion(scene, x, y) {
    var _this = _super.call(this, scene, x, y, 'explosion') || this;

    scene.add.existing(_this);

    _this.play('explode');

    return _this;
  }

  return Explosion;
}(Phaser.GameObjects.Sprite);

exports.Explosion = Explosion;
},{}],"js/Scene2.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var beam_ts_1 = require("./beam.ts");

var config_ts_1 = require("./config.ts");

var game_settings_ts_1 = require("./game-settings.ts");

var explosion_ts_1 = require("./explosion.ts");

var Scene2 =
/** @class */
function (_super) {
  __extends(Scene2, _super);

  function Scene2() {
    return _super.call(this, 'playGame') || this;
  } // //  used to prepare data
  // init() {
  // }
  // // load music and images into memory
  // preload() {
  // }
  // add objects to the game


  Scene2.prototype.create = function () {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
    this.background = this.add.tileSprite(0, 0, config_ts_1.config.width, config_ts_1.config.height, 'background');
    this.background.setOrigin(0, 0);
    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.beginPath();
    graphics.moveTo(0, 0);
    graphics.lineTo(config_ts_1.config.width, 0);
    graphics.lineTo(config_ts_1.config.width, 20);
    graphics.lineTo(0, 20);
    graphics.lineTo(0, 0);
    graphics.closePath();
    graphics.fillPath();
    this.score = 0;
    this.scoreLabel = this.add.bitmapText(10, 5, 'pixelFont', 'SCORE ', 16);
    this.beamSound = this.sound.add('audio_beam');
    this.explosionSound = this.sound.add('audio_explosion');
    this.pickupSound = this.sound.add('audio_pickup');
    this.music = this.sound.add('music');
    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    };
    this.music.play(musicConfig);
    this.ship1 = this.add.sprite(config_ts_1.config.width / 2 - 50, config_ts_1.config.height / 2, 'ship');
    this.ship2 = this.add.sprite(config_ts_1.config.width / 2, config_ts_1.config.height / 2, 'ship2');
    this.ship3 = this.add.sprite(config_ts_1.config.width / 2 + 50, config_ts_1.config.height / 2, 'ship3');
    this.enemies = this.physics.add.group();
    this.enemies.add(this.ship1);
    this.enemies.add(this.ship2);
    this.enemies.add(this.ship3);
    this.ship1.play('ship1_anim');
    this.ship2.play('ship2_anim');
    this.ship3.play('ship3_anim'); // enable ship to receive click input

    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();
    this.input.on('gameobjectdown', this.destroyShip, this);
    this.powerUps = this.physics.add.group();
    var maxObjects = 4;

    for (var i = 0; i < maxObjects; i++) {
      var powerUp = this.physics.add.sprite(16, 16, 'power-up');
      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(0, 0, this.game.config.width, this.game.config.height);

      if (Math.random() > 0.5) {
        powerUp.play('red');
      } else {
        powerUp.play('gray');
      }

      powerUp.setVelocity(100, 100);
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
    }

    this.player = this.physics.add.sprite(config_ts_1.config.width / 2 - 8, config_ts_1.config.height - 64, 'player');
    this.player.play('thrust');
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); // group to hold all our projectiles

    this.projectiles = this.add.group();
    this.physics.add.collider(this.projectiles, this.powerUps, function (projectile, powerUp) {
      projectile.destroy();
    });
    this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);
    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
    this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);
  }; // //  loop which runs continuously


  Scene2.prototype.update = function () {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);
    this.background.tilePositionY -= 0.5;
    this.movePlayerManager();

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      if (this.player.active) {
        this.shootBeam();
      }
    }

    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      var beam = this.projectiles.getChildren()[i];
      beam.update();
    }
  };

  Scene2.prototype.zeroPad = function (number, size) {
    var stringNumber = String(number);

    while (stringNumber.length < (size || 2)) {
      stringNumber = "0" + stringNumber;
    }

    return stringNumber;
  };

  Scene2.prototype.hitEnemy = function (projectile, enemy) {
    var explosion = new explosion_ts_1.Explosion(this, enemy.x, enemy.y);
    projectile.destroy();
    this.resetShipPos(enemy);
    this.score += 15;
    var scoreFormatted = this.zeroPad(this.score, 6);
    this.scoreLabel.text = "SCORE " + scoreFormatted;
    this.explosionSound.play();
  };

  Scene2.prototype.hurtPlayer = function (player, enemy) {
    this.resetShipPos(enemy);
    if (this.player.alpha < 1) return;
    var explosion = new explosion_ts_1.Explosion(this, player.x, player.y);
    player.disableBody(true, true); // this.resetPlayer();

    this.time.addEvent({
      delay: 1000,
      callback: this.resetPlayer,
      callbackScope: this,
      loop: false
    });
  };

  Scene2.prototype.resetPlayer = function () {
    var x = config_ts_1.config.width / 2 - 8;
    var y = config_ts_1.config.height + 64;
    this.player.enableBody(true, x, y, true, true);
    this.player.alpha = 0.5;
    var tween = this.tweens.add({
      targets: this.player,
      y: config_ts_1.config.height - 64,
      ease: 'Power1',
      duration: 1500,
      repeat: 0,
      onComplete: function onComplete() {
        this.player.alpha = 1;
      },
      callbackScope: this
    });
  };

  Scene2.prototype.pickPowerUp = function (player, powerUp) {
    powerUp.disableBody(true, true);
    this.pickupSound.play();
  };

  Scene2.prototype.shootBeam = function () {
    var beam = new beam_ts_1.Beam(this);
    this.beamSound.play();
  };

  Scene2.prototype.movePlayerManager = function () {
    this.player.setVelocity(0);

    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-game_settings_ts_1.gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(game_settings_ts_1.gameSettings.playerSpeed);
    }

    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-game_settings_ts_1.gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(game_settings_ts_1.gameSettings.playerSpeed);
    }
  }; // pointer - mouse pointer
  // gameObject - the clicked object (in this case the ship)


  Scene2.prototype.destroyShip = function (pointer, gameObject) {
    // switch ship texture with the explosion spritesheet
    gameObject.setTexture('explosion');
    gameObject.play('explode');
  };

  Scene2.prototype.moveShip = function (ship, speed) {
    ship.y += speed;

    if (ship.y > config_ts_1.config.height) {
      this.resetShipPos(ship);
    }
  };

  Scene2.prototype.resetShipPos = function (ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, config_ts_1.config.width);
    ship.x = randomX;
  }; // Source @robmuh  on html5gamedevs.com
  // http://www.html5gamedevs.com/topic/36607-scaling-the-canvas-for-pixel-art/?do=findComment&comment=209927


  Scene2.prototype.resize = function () {
    var canvas = this.game.canvas,
        width = window.innerWidth,
        height = window.innerHeight;
    var wratio = width / height,
        ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
      canvas.style.width = width + "px";
      canvas.style.height = width / ratio + "px";
    } else {
      canvas.style.width = height * ratio + "px";
      canvas.style.height = height + "px";
    }
  };

  return Scene2;
}(Phaser.Scene);

exports.Scene2 = Scene2;
},{"./beam.ts":"js/beam.ts","./config.ts":"js/config.ts","./game-settings.ts":"js/game-settings.ts","./explosion.ts":"js/explosion.ts"}],"js/config.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scene1_ts_1 = require("./Scene1.ts");

var Scene2_ts_1 = require("./Scene2.ts");

exports.config = {
  width: 256,
  height: 272,
  scene: [Scene1_ts_1.Scene1, Scene2_ts_1.Scene2],
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
},{"./Scene1.ts":"js/Scene1.ts","./Scene2.ts":"js/Scene2.ts"}],"js/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_ts_1 = require("./config.ts");
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var game;
var app = {
  // Application Constructor
  initialize: function initialize() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function onDeviceReady() {
    this.receivedEvent('deviceready');
    game = new Phaser.Game(config_ts_1.config);
  },
  // Update DOM on a Received Event
  receivedEvent: function receivedEvent(id) {
    // var parentElement = document.getElementById(id);
    // var listeningElement = parentElement.querySelector('.listening');
    // var receivedElement = parentElement.querySelector('.received');
    // listeningElement.setAttribute('style', 'display:none;');
    // receivedElement.setAttribute('style', 'display:block;');
    var rootElement = document.querySelector('.app');
    rootElement.setAttribute('style', 'display:none;');
    console.log('Received Event: ' + id);
  }
};
app.initialize();

if (!window.cordova) {
  setTimeout(function () {
    var e = document.createEvent('Events');
    e.initEvent('deviceready', true, false);
    document.dispatchEvent(e);
  }, 50);
}
},{"./config.ts":"js/config.ts"}],"../../../.npm-global/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45951" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.npm-global/lib/node_modules/parcel/src/builtins/hmr-runtime.js","js/index.ts"], null)
//# sourceMappingURL=/js.52877fb3.js.map