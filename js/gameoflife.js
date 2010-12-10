function GameOfLife() {
	var state = [[0]];
	var rules = [
				[0,0,0,1,0,0,0,0,0],
				[0,0,1,1,0,0,0,0,0]
				];
	var self = this;

	this.getState = function() {
		return self.cloneState(state);
	}
	this.setState = function(newState) {
		if (newState.constructor != Array) {
			throw("State must be an array of arrays of 0s or 1s.");
		}
		if (newState.length < 1) {
			throw("State must be an array of arrays of 0s or 1s.");
		}
		if (newState[0].constructor != Array) {
			throw("State must be an array of arrays of 0s or 1s.");
		}
		if (newState[0].length < 1) {
			throw("State must be an array of arrays of 0s or 1s.");
		}
		for (y in newState) {
			for (x in newState[y]) {
				if ( (newState[y][x] != 1) &&
					 (newState[y][x] != 0) )
				{
					throw("State must be an array of arrays of 0s or 1s.");
				}
			}
		}
		state = self.cloneState(newState);
	}

	this.numberOfNeighbors = function(x, y, currentState) {
		var value = 0;

		var height = currentState.length;
		var width = currentState[0].length;

		var t = parseInt(y)-1 >= 0 ? parseInt(y)-1 : height-1;
		var b = parseInt(y)+1 < height ? 1+parseInt(y) : 0;
		var l = parseInt(x)-1 >= 0 ? parseInt(x)-1 : width-1;
		var r = parseInt(x)+1 < width ? 1+parseInt(x) : 0;
		var x = parseInt(x);
		var y = parseInt(y);

		value = currentState[t][l] +
				currentState[t][x] +
				currentState[t][r] +
				currentState[y][l] +
				currentState[y][r] +
				currentState[b][l] +
				currentState[b][x] +
				currentState[b][r];

		return value;
	}

	this.evolve = function() {
		var newState = [];//this.getState();
		var currentState = self.getState();
		//console.log(currentState);
		for(y in currentState) {
		//for (y=0; y<currentState.length; y++) {
			newState[y] = [];
			for(x in currentState[y]) { 
			//for (x=0; x<currentState[0].length; x++) {
				var neighbors = self.numberOfNeighbors(x,y, currentState);
				newState[y][x] = rules[currentState[y][x]][neighbors];
			}
		}
		//console.log(newState);
		self.setState(newState);
	}
	
	this.cloneState = function(originalState) {
	//console.log(originalState);
		var clonedState = [];
		for (y in originalState) {
		//for (y=0; y<originalState.length; y++) {
			clonedState[y] = [];
			for (x in originalState[y]) {
			//for (x=0; x<originalState[0].length; x++) {
				clonedState[y][x] = originalState[y][x];
			}
		} 
		return clonedState;
	}
}
