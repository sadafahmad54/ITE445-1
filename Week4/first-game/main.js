var mainState={


	preload: function(){
		game.load.image('player', 'assets/player.png');
		//var.player= game.add.sprite(250, 170, 'player');
		this.player= game.add.sprite(game.width/2, game.height/2, 'player');
	  




	},
	create: function(){

		game.stage.backgroundColor= '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.renderer.renderSession.roundPixels= true;
		game.physics.arcade.enable(this.player);
		this.player.anchor.setTo(0.5,0.5);
	   
		this.player.body.gravity.y=100;
		this.cursor=game.input.keyboard.createCursorKeys();
		//this,player.tint=0*ff0000;


	},
	update: function(){
		this.movePlayer();


	},

	movePlayer: function(){
		if(this.cursor.left.isDown){
			this.player.body.velocity.x=-200;
		}
		else if(this.cursor.right.isDown){
			this.player.body.velocity.x=200;
		}

		else{
			this.player.body.velocity.x=0;
		}

		if(this.cursor.up.isDown && this.player.body.touching.down){
			this.player.body.velocity.y= -320;		
		}
	}
};

var game = new Phaser.Game(500, 340, Phaser.AUTO, "gameDiv");
game. state.add("main", mainState);
game. state.start("main");