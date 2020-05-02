/*
* @Author: UnsignedByte
* @Date:   00:33:26, 30-Apr-2020
* @Last Modified by:   UnsignedByte
* @Last Modified time: 10:57:17, 02-May-2020
*/

var Simulation = (function(){
	var self = {};

	self.rules = {
		//1 = set to alive
		//2 = don't change state
		//0 = set to unalive
		rule:[0,0,2,1,0,0,0,0,0],
		r:[1,1], //neighbourhood radius min,max
		type:"m" // neighbourhood type (m:moores or n:vonn neumann)
	};
	self.grid = {};

	function access(x, y){
		if (self.grid[x]===undefined){
			self.grid[x] = {};
		}
		if (self.grid[x][y]===undefined){
			self.grid[x][y]={state:0,neighbors:n};
		}
		return self.grid[x][y];
	}

	function updateNeighbors(x,y){
		const state = access(x,y)>0;
		if (!state){ //return if this cell isnt alive
			return;
		}
		switch (self.rules.type){
			case "m":
				for(const i = x-self.rules.r[1]; i <= x+self.rules.r[1]; i++){
					for(const j = y-self.rules.r[1]; j<= y+self.rules.r[1]; j++){
						access(i,j)++; //update neighbor count of neighbors with 1
					}
				}
				break;
			case "n":
				break;
			default:
		}
	}
	function updateStates(x,y){
		let cell = access(x,y);
		switch(self.rules.rule[cell.neighbors]){
			case 0:
			case 1:
			case 2:
			default:
		}
	}

	function traverseGrid(func){
		for (const [x, ylist] of Object.entries(self.grid)) {
			for (const y of Object.keys(ylist)) {
				func(x,y);
			}
		}
	}

	self.step = function (){
		traverseGrid(updateNeighbors);
		traverseGrid(updateStates);
	}

	return self;
}());


$("#sim").bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
    }
    else {
        console.log('Scroll down');
    }
});
