var game = {

	selectedValue: [],
	create: function() {
		var row1= document.getElementById("row1");
		
		var columns= "";
		for (var i=1; i<=12; i++){
			columns += "<div class= 'col-md-1'>";
			columns+= "<span class='box'>";
			columns+= Math.floor(Math.random()*50);
			columns+= "</span>";
			columns += "</div>";
		row1.innerHTML= columns;
		var rows= document.getElementsByClassName("box");
	for (var i=0; i< rows.length; i++){
		rows[i].addEventListener("click",this.update );

	}
		

		}
	}, 
	update: function(e){
	e.target.style.backgroundColor='white';
	var resultRow= document.getElementById("rowResult");
	var rowString="";
	var score=0;
	game.selectedValue.push(e.target.textContent);
	rowString+= "You have Selected: ";
	for(i=0; i< game.selectedValue.length; i++){
		rowString+=game.selectedValue[i]+ "";
		score+= game.selectedValue[i] *1.0;
		//rowString+= "</t>";
	}
	rowString+= "</br>";
	rowString+= "Your score is: " +score;
	resultRow.innerHTML= rowString;
	//	var selectedValue= e.target.textContent;
	//
	}
};

window.onload= function() {
	game.create();
}