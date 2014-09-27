
function Animal(name, speed, focus) {
			this.name = name;
			//values: 0 - 9
			this.speed = speed;
			this.focus = focus;
			this.position = 0;
			this.isFocused = function () {
				return Math.floor(Math.random () * 10) < this.focus;
		};
	this.advance = function () {
		if (this.isFocused ()) {
			this.position += this.speed;
				}
		//Sets position back by 10.
		this.speedBump = function () {
			this.position -= 10;
		};
	};
	//will provide progress reports on the racers.
	this.progressReport = function () {
		return this.name + " is at: " + this.position;
	};
}
	//creates two racers, rabbit & turtle.
	var rabbit = new Animal("Rocky", 8, 3);
	var turtle = new Animal("Myrtle", 3, 7);
	//Sets control variable of race length to 100 meters.
	var meters = 100;
	//creates control variable for speedbump
	var hitSpeedBump = false;

	
	//while loop for advancing the racers.
	while (rabbit.position < meters && turtle.position < meters) {
		rabbit.advance();
			turtle.advance();
			alert(rabbit.progressReport() + "--" + turtle.progressReport());
				//announces winner for first racer to get to 100 meters.
				if (rabbit.position >= 100 && rabbit.position > turtle.position) {
					alert ("Speed was key to this race....Rocky wins!");
				if(turtle.position >= 100 && turtle.position > rabbit.position) {
					alert ("Slow and steady wins the race....Myrtle is the winner!");
				}

				}
		//first racer to hit 60, hits the speedbump and goes back 10 meters. 
		if (rabbit.position >= 60 && hitSpeedBump === false) {
    	rabbit.speedBump();
   		hitSpeedBump = true;
   		//alert that will occur if the rabbit hits the speed bump
   		alert("Uh oh, Rocky hit a speed bump and moves back 10 meters\n\n" + rabbit.progressReport() + "--" + turtle.progressReport());
		} if (turtle.position >= 60 && hitSpeedBump === false) {
    	turtle.speedBump();
    	hitSpeedBump = true;
    	//alert that will occur if the turtle hits the speed bump
    	alert("Uh oh, Myrtle hit a speed bump and moves back 10 meters\n\n" + rabbit.progressReport() + "--" + turtle.progressReport());
		}
   	}
	