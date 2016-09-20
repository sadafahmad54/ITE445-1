var menuState={


	create: function(){

		game.add.image(0,0, 'background');
		var nameLabel= game.add.text(game.width/2, -50, 'Super Coin Box', {font: '70px Geo', fill:'#ffffff'});
		nameLabel.anchor.setTo(0.5, 0.5);
		//var tween=game.add.tween(nameLabel);
		game.add.tween(nameLabel).to({y:80},1000).easing(Phaser.Easing.Bounce.Out).start();
		
		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);

		//var scoreLabel= game.add.text(game.width/2, game.height/2, 'score:' + game.global.score, {font: '25px Arial', fill:'#ffffff'});
		//scoreLabel.anchor.setTo(0.5, 0.5);


			var text = 'score: ' + game.global.score + '\nbest score: ' + localStorage.getItem('bestScore');
			var scoreLabel = game.add.text(game.width/2, game.height/2, text, { font: '25px Arial', fill: '#ffffff', align: 'center' });




		var startLabel= game.add.text(game.width/2, game.height-80, 'Press the Up Arrow Key to Start', {font: '20px Arial', fill:'#ffffff'});
		startLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(startLabel).to({angel:-2},500).to({angel:2},1000).to({angel:0},500).loop().start();

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.start, this);
		//console.log("menuState");

	},

		toggleSound: function() { // Switch the variable from true to false, or false to true // When 
		game.sound.mute= !game.sound.mute;
            // Change the frame of the button this.
		this.muteButton.frame = game.sound.mute ? 1 : 0;
          },




		start: function(){
			console.log("..start");
			game.state.start('play');
		},

};