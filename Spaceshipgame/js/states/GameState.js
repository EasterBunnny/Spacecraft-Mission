var SpaceHipster = SpaceHipster || {};

SpaceHipster.GameState = {

//initiate game settings
init: function() {
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  this.game.physics.startSystem(Phaser.Physics.ARCADE);

  this.PLAYER_SPEED = 200;
  this.BULLET_SPEED = -1000;

},

//load this game assets before the game start
preload: function() {
  this.load.image('space', 'images/space.png');
  this.load.image('player', 'images/player.png');
  this.load.image('bullet', 'images/bullet.png');
  this.load.image('enemyParticle', 'images/enemyParticle.png');
  this.load.spritesheet('yellowEnemy', 'images/yellow_enemy.png', 50, 46, 3, 1, 1);
  this.load.spritesheet('redEnemy', 'images/red_enemy.png', 50, 46, 3, 1, 1);
  this.load.spritesheet('greenEnemy', 'images/green_enemy.png', 50, 46, 3, 1, 1);

},
//executed after everything is loaded
create: function() {
  this.background = this.add.tileSprite(0,0, this.game.world.width, this.game.world.height, 'space');

  this.background.autoScroll(0, 30);

  //player
  this.player = this.add.sprite(this.game.world.centerX, this.game.world.height - 50, 'player');
    this.player.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;

    this.initBullets();
    this.shootingTimer = this.game.time.events.loop(Phaser.Timer.SECOND/5, this.createPlayerBullet, this);

},

update: function() {
  this.player.body.velocity.x = 0;

  if(this.game.input.activePointer.isDown) {
    var targetX = this.game.input.activePointer.position.x;

    var direction = targetX >= this.game.world.centerX ? 1 : -1;

    this.player.body.velocity.x = direction * this.PLAYER_SPEED;
  }
},
initBullets: function(){
  this.playerBullets = this.add.group();
  this.playerBullets.enableBody = true;
},
createPlayerBullet: function(){
  var bullet = this.playerBullets.getFirstExists(false);

  if(!bullet) {
    console.log('create bullet');
  }
  else {
    //reset position
  }

  //set velocity
}

};




