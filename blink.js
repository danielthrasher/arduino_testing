//Johnny-Five is our Javascript framework for accessing arduino
var jfive = require("johnny-five");
var board, led

board = new jfive.Board();

// Similar to jQuery,  we wait for the board to be ready
board.on("ready", function() {

	// 13 represenents the pin number that the LED is plugged into
	led = new jfive.Led(13)

	// The LED blinks (i.e. turns on and off) ever 1000 milliseconds
	led.blink(1000);


});