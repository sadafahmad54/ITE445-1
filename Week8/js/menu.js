var menuState={


	create: function(){

		game.add.image(0,0, 'background');
		var nameLabel= game.add.text(game.width/2, -50, 'Super Coin Box', {font: '50px Arial', fill:'#ffffff'});
		nameLabel.anchor.setTo(0.5, 0.5);
		//var tween=game.add.tween(nameLabel);
		game.add.tween(nameLabel).to({y:80},1000).easing(Phaser.Easing.Bounce.Out).start();
		


		var scoreLabel= game.add.text(game.width/2, game.height/2, 'score:' + game.global.score, {font: '25px Arial', fill:'#ffffff'});
		scoreLabel.anchor.setTo(0.5, 0.5);

		var startLabel= game.add.text(game.width/2, game.height-80, 'Press the Up Arrow Key to Start', {font: '20px Arial', fill:'#ffffff'});
		startLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(startLabel).to({angel:-2},500).to({angel:2},1000).to({angel:0},500).loop().start();

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.start, this);
		//console.log("menuState");

	},

		start: function(){
			console.log("..start");
			game.state.start('play');
		}

};