parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D3hQ":[function(require,module,exports) {
module.exports="/hellophaser/background.4f0ec5bb.png";
},{}],"+Tfr":[function(require,module,exports) {
module.exports="/hellophaser/ship.fb0567b2.png";
},{}],"0Rjt":[function(require,module,exports) {
module.exports="/hellophaser/ship2.409d308a.png";
},{}],"y+cS":[function(require,module,exports) {
module.exports="/hellophaser/ship3.a3d13fe0.png";
},{}],"V3Sr":[function(require,module,exports) {
module.exports="/hellophaser/explosion.1e42e8d0.png";
},{}],"J5Yp":[function(require,module,exports) {
module.exports="/hellophaser/power-up.be978a4c.png";
},{}],"G6gq":[function(require,module,exports) {
module.exports="/hellophaser/player.bb52724d.png";
},{}],"p3H3":[function(require,module,exports) {
module.exports="/hellophaser/beam.d64ba55d.png";
},{}],"N48q":[function(require,module,exports) {
module.exports="/hellophaser/font.961a9a20.png";
},{}],"5f/Y":[function(require,module,exports) {
module.exports="/hellophaser/font.c53f249f.xml";
},{}],"4z9a":[function(require,module,exports) {
module.exports="/hellophaser/beam.871c411a.ogg";
},{}],"lQvg":[function(require,module,exports) {
module.exports="/hellophaser/beam.d308b14a.mp3";
},{}],"tgmL":[function(require,module,exports) {
module.exports="/hellophaser/explosion.c8e71d5a.ogg";
},{}],"3ki2":[function(require,module,exports) {
module.exports="/hellophaser/explosion.06b48100.mp3";
},{}],"R/Qx":[function(require,module,exports) {
module.exports="/hellophaser/pickup.0e88b7f6.ogg";
},{}],"9Ea8":[function(require,module,exports) {
module.exports="/hellophaser/pickup.50b63989.mp3";
},{}],"O8Jj":[function(require,module,exports) {
module.exports="/hellophaser/sci-fi_platformer12.b0c1e0f4.ogg";
},{}],"dov4":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(s,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var t in s)s.hasOwnProperty(t)&&(e[t]=s[t])})(s,t)};return function(s,t){function r(){this.constructor=s}e(s,t),s.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var s=function(s){function t(){return s.call(this,"bootGame")||this}return e(t,s),t.prototype.preload=function(){this.load.image("background",require("../assets/images/background.png")),this.load.spritesheet("ship",require("../assets/spritesheets/ship.png"),{frameWidth:16,frameHeight:16}),this.load.spritesheet("ship2",require("../assets/spritesheets/ship2.png"),{frameWidth:32,frameHeight:16}),this.load.spritesheet("ship3",require("../assets/spritesheets/ship3.png"),{frameWidth:32,frameHeight:32}),this.load.spritesheet("explosion",require("../assets/spritesheets/explosion.png"),{frameWidth:16,frameHeight:16}),this.load.spritesheet("power-up",require("../assets/spritesheets/power-up.png"),{frameWidth:16,frameHeight:16}),this.load.spritesheet("player",require("../assets/spritesheets/player.png"),{frameWidth:16,frameHeight:24}),this.load.spritesheet("beam",require("../assets/spritesheets/beam.png"),{frameWidth:16,frameHeight:16}),this.load.bitmapFont("pixelFont",require("../assets/font/font.png"),require("../assets/font/font.xml")),this.load.audio("audio_beam",[require("../assets/sounds/beam.ogg"),require("../assets/sounds/beam.mp3")]),this.load.audio("audio_explosion",[require("../assets/sounds/explosion.ogg"),require("../assets/sounds/explosion.mp3")]),this.load.audio("audio_pickup",[require("../assets/sounds/pickup.ogg"),require("../assets/sounds/pickup.mp3")]),this.load.audio("music",[require("../assets/sounds/sci-fi_platformer12.ogg"),require("../assets/sounds/sci-fi_platformer12.ogg")])},t.prototype.create=function(){this.add.text(20,20,"Loading game..."),this.scene.start("playGame"),this.anims.create({key:"ship1_anim",frames:this.anims.generateFrameNumbers("ship"),frameRate:20,repeat:-1}),this.anims.create({key:"ship2_anim",frames:this.anims.generateFrameNumbers("ship2"),frameRate:20,repeat:-1}),this.anims.create({key:"ship3_anim",frames:this.anims.generateFrameNumbers("ship3"),frameRate:20,repeat:-1}),this.anims.create({key:"explode",frames:this.anims.generateFrameNumbers("explosion"),frameRate:20,repeat:0,hideOnComplete:!0}),this.anims.create({key:"red",frames:this.anims.generateFrameNumbers("power-up",{start:0,end:1}),frameRate:20,repeat:-1}),this.anims.create({key:"gray",frames:this.anims.generateFrameNumbers("power-up",{start:2,end:3}),frameRate:20,repeat:-1}),this.anims.create({key:"thrust",frames:this.anims.generateFrameNumbers("player"),frameRate:20,repeat:-1}),this.anims.create({key:"beam_anim",frames:this.anims.generateFrameNumbers("beam"),frameRate:20,repeat:-1})},t}(Phaser.Scene);exports.Scene1=s;
},{"../assets/images/background.png":"D3hQ","../assets/spritesheets/ship.png":"+Tfr","../assets/spritesheets/ship2.png":"0Rjt","../assets/spritesheets/ship3.png":"y+cS","../assets/spritesheets/explosion.png":"V3Sr","../assets/spritesheets/power-up.png":"J5Yp","../assets/spritesheets/player.png":"G6gq","../assets/spritesheets/beam.png":"p3H3","../assets/font/font.png":"N48q","../assets/font/font.xml":"5f/Y","../assets/sounds/beam.ogg":"4z9a","../assets/sounds/beam.mp3":"lQvg","../assets/sounds/explosion.ogg":"tgmL","../assets/sounds/explosion.mp3":"3ki2","../assets/sounds/pickup.ogg":"R/Qx","../assets/sounds/pickup.mp3":"9Ea8","../assets/sounds/sci-fi_platformer12.ogg":"O8Jj"}],"u8Os":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){function r(t){var r=this,o=t.player,n=o.x,i=o.y;return i-=16,r=e.call(this,t,n,i,"beam")||this,t.add.existing(r),r.play("beam_anim"),t.physics.world.enableBody(r),r.body.velocity.y=-250,t.projectiles.add(r),r}return t(r,e),r.prototype.update=function(){this.y<32&&this.destroy()},r}(Phaser.GameObjects.Sprite);exports.Beam=e;
},{}],"g8NN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gameSettings={playerSpeed:200};
},{}],"Uvdp":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){function o(t,o,r){var n=e.call(this,t,o,r,"explosion")||this;return t.add.existing(n),n.play("explode"),n}return t(o,e),o}(Phaser.GameObjects.Sprite);exports.Explosion=e;
},{}],"IyWu":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(i,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(i,e)};return function(i,e){function s(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}();Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./beam.ts"),e=require("./config.ts"),s=require("./game-settings.ts"),h=require("./explosion.ts"),o=function(o){function r(){return o.call(this,"playGame")||this}return t(r,o),r.prototype.create=function(){window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.background=this.add.tileSprite(0,0,e.config.width,e.config.height,"background"),this.background.setOrigin(0,0);var t=this.add.graphics();t.fillStyle(0,1),t.beginPath(),t.moveTo(0,0),t.lineTo(e.config.width,0),t.lineTo(e.config.width,20),t.lineTo(0,20),t.lineTo(0,0),t.closePath(),t.fillPath(),this.score=0,this.scoreLabel=this.add.bitmapText(10,5,"pixelFont","SCORE ",16),this.beamSound=this.sound.add("audio_beam"),this.explosionSound=this.sound.add("audio_explosion"),this.pickupSound=this.sound.add("audio_pickup"),this.music=this.sound.add("music");this.music.play({mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0}),this.ship1=this.add.sprite(e.config.width/2-50,e.config.height/2,"ship"),this.ship2=this.add.sprite(e.config.width/2,e.config.height/2,"ship2"),this.ship3=this.add.sprite(e.config.width/2+50,e.config.height/2,"ship3"),this.enemies=this.physics.add.group(),this.enemies.add(this.ship1),this.enemies.add(this.ship2),this.enemies.add(this.ship3),this.ship1.play("ship1_anim"),this.ship2.play("ship2_anim"),this.ship3.play("ship3_anim"),this.powerUps=this.physics.add.group();for(var i=0;i<4;i++){var s=this.physics.add.sprite(16,16,"power-up");this.powerUps.add(s),s.setRandomPosition(0,0,this.game.config.width,this.game.config.height),Math.random()>.5?s.play("red"):s.play("gray"),s.setVelocity(100,100),s.setCollideWorldBounds(!0),s.setBounce(1)}this.player=this.physics.add.sprite(e.config.width/2-8,e.config.height-64,"player"),this.player.play("thrust"),this.cursorKeys=this.input.keyboard.createCursorKeys(),this.player.setCollideWorldBounds(!0),this.spacebar=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),this.nextShotAt=0,this.projectiles=this.add.group(),this.physics.add.collider(this.projectiles,this.powerUps,function(t,i){t.destroy()}),this.physics.add.overlap(this.player,this.powerUps,this.pickPowerUp,null,this),this.physics.add.overlap(this.player,this.enemies,this.hurtPlayer,null,this),this.physics.add.overlap(this.projectiles,this.enemies,this.hitEnemy,null,this)},r.prototype.update=function(){this.moveShip(this.ship1,1),this.moveShip(this.ship2,2),this.moveShip(this.ship3,3),this.background.tilePositionY-=.5,this.movePlayerManager(),(this.input.activePointer.isDown||Phaser.Input.Keyboard.JustDown(this.spacebar))&&this.player.active&&this.shootBeam();for(var t=0;t<this.projectiles.getChildren().length;t++){this.projectiles.getChildren()[t].update()}},r.prototype.zeroPad=function(t,i){for(var e=String(t);e.length<(i||2);)e="0"+e;return e},r.prototype.hitEnemy=function(t,i){new h.Explosion(this,i.x,i.y);t.destroy(),this.resetShipPos(i),this.score+=15;var e=this.zeroPad(this.score,6);this.scoreLabel.text="SCORE "+e,this.explosionSound.play()},r.prototype.hurtPlayer=function(t,i){var e=this;if(navigator.vibrate(1/0),this.resetShipPos(i),!(this.player.alpha<1)){new h.Explosion(this,t.x,t.y);t.disableBody(!0,!0),this.time.addEvent({delay:1e3,callback:function(){navigator.vibrate(0),e.resetPlayer()},callbackScope:this,loop:!1})}},r.prototype.resetPlayer=function(){var t=e.config.width/2-8,i=e.config.height+64;this.player.enableBody(!0,t,i,!0,!0),this.player.alpha=.5;this.tweens.add({targets:this.player,y:e.config.height-64,ease:"Power1",duration:1500,repeat:0,onComplete:function(){this.player.alpha=1},callbackScope:this})},r.prototype.pickPowerUp=function(t,i){i.disableBody(!0,!0),this.pickupSound.play()},r.prototype.shootBeam=function(){if(!(this.nextShotAt>this.game.getTime())){new i.Beam(this);this.beamSound.play(),this.nextShotAt=this.game.getTime()+100}},r.prototype.movePlayerManager=function(){if(this.player.setVelocity(0),this.input.activePointer.isDown)return this.player.x=this.input.activePointer.x,void(this.player.y=this.input.activePointer.y-15);this.cursorKeys.left.isDown?this.player.setVelocityX(-s.gameSettings.playerSpeed):this.cursorKeys.right.isDown&&this.player.setVelocityX(s.gameSettings.playerSpeed),this.cursorKeys.up.isDown?this.player.setVelocityY(-s.gameSettings.playerSpeed):this.cursorKeys.down.isDown&&this.player.setVelocityY(s.gameSettings.playerSpeed)},r.prototype.moveShip=function(t,i){t.y+=i,t.y>e.config.height&&this.resetShipPos(t)},r.prototype.resetShipPos=function(t){t.y=0;var i=Phaser.Math.Between(0,e.config.width);t.x=i},r.prototype.resize=function(){var t=this.game.canvas,i=window.innerWidth,e=window.innerHeight,s=i/e,h=t.width/t.height;s<h?(t.style.width=i+"px",t.style.height=i/h+"px"):(t.style.width=e*h+"px",t.style.height=e+"px")},r}(Phaser.Scene);exports.Scene2=o;
},{"./beam.ts":"u8Os","./config.ts":"M5zi","./game-settings.ts":"g8NN","./explosion.ts":"Uvdp"}],"M5zi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Scene1.ts"),r=require("./Scene2.ts");exports.config={width:256,height:272,scene:[e.Scene1,r.Scene2],pixelArt:!0,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{debug:!1}}};
},{"./Scene1.ts":"dov4","./Scene2.ts":"IyWu"}],"Rgmk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("./config.ts"),i={initialize:function(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)},onDeviceReady:function(){this.receivedEvent("deviceready"),e=new Phaser.Game(t.config)},receivedEvent:function(e){document.querySelector(".app").setAttribute("style","display:none;"),console.log("Received Event: "+e)}};i.initialize(),window.cordova||setTimeout(function(){var e=document.createEvent("Events");e.initEvent("deviceready",!0,!1),document.dispatchEvent(e)},50);
},{"./config.ts":"M5zi"}]},{},["Rgmk"], null)
//# sourceMappingURL=/hellophaser/js.4cdc7d14.js.map
