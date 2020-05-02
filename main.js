/*
* @Author: UnsignedByte
* @Date:   01:13:01, 02-May-2020
* @Last Modified by:   UnsignedByte
* @Last Modified time: 01:28:10, 02-May-2020
*/


const framerate = 60; //fps


var Render = (function(){
	var self = {};

	self.canvas = document.getElementById("sim");
	self.ctx = canvas.getContext('2d');

	self.draw(){
		self.ctx.canvas.width  = $(self.canvas).parent().innerWidth();
	  	self.ctx.canvas.height = $(self.canvas).parent().innerHeight();
	  	Simulation.step();
	}

	return self;

}());