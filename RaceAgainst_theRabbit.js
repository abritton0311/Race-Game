
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
	this.progressReport = function () {
		return this.name + " is at: " + this.position;
	};
}
	var rabbit = new Animal("Rocky", 8, 3);
	var turtle = new Animal("Myrtle", 3, 7);
	var meters = 100;
	var hitSpeedBump = false;

	while (rabbit.position < meters && turtle.position < meters) {
		rabbit.advance();
			turtle.advance();
			alert(rabbit.progressReport() + "--" + turtle.progressReport());
		if (rabbit.position >= 60 && hitSpeedBump === false) {
    	rabbit.speedBump();
   		hitSpeedBump = true;
   		alert("Uh oh, Rocky hit a speed bump and moves back 10 meters\n\n" + rabbit.progressReport() + "--" + turtle.progressReport());
		} if (turtle.position >= 60 && hitSpeedBump === false) {
    	turtle.speedBump();
    	hitSpeedBump = true;
    	alert("Uh oh, Myrtle hit a speed bump and moves back 10 meters\n\n" + rabbit.progressReport() + "--" + turtle.progressReport());
		}
   			}
	}