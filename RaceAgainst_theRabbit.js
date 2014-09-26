
function Animal(name, speed, focus) {
			this.name = name;
			//values: 0 - 9
			this.speed = speed;
			this.focus = focus;
			this.position = 0;
			var hitSpeedBump = false;
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

	while (rabbit.position < meters && turtle.position < meters) {
		if (rabbit.postion >= 60 && Animal.hitSpeedBump === false) {
    	rabbit.speedBump();
   		Animal.hitSpeedBump = true;
   		alert("Uh oh, Rocky hit a speed bump and moves back 10 meters\n\n" + rabbit.progressReport() + "--" + turtle.progressReport());
		} else if (turtle.position >= 60 && Animal.hitSpeedBump === false) {
    	turtle.speedBump();
    	Animal.hitSpeedBump = true;
    	alert("Uh oh, Myrtle hit a speed bump and moves back 10 meters\n\n" + rabbit.progressReport() + "--" + turtle.progressReport());
		} else {
   		rabbit.advance();
			turtle.advance();
			alert(rabbit.progressReport() + "--" + turtle.progressReport());
		}
	}