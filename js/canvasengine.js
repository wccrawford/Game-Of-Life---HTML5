// Canvas Engine

var CanvasEngine = function() {
	var interval = 200;
	var intervalId = null;
	var processLogic = true;
	var events = [];
	var self = this;

	this.inputRoutine = function() {}
	this.logicRoutine = function() {}
	this.drawRoutine = function() {}
	this.getInterval = function() {
		return interval;
	}
	this.setInterval = function(newInterval) {
		interval = newInterval;
	}
	this.getProcessLogic = function() {
		return processLogic;
	}
	this.setProcessLogic = function(newProcessLogic) {
		processLogic = newProcessLogic;
	}
	this.advanceFrame = function(engine) {
		currentEvents = events;
		self.clearEvents();
		self.inputRoutine(currentEvents);
		if(processLogic) {
			try {
				self.logicRoutine();
			} catch (excep) {}
		}
		try {
			self.drawRoutine();
		} catch (excep) {}
	}
	this.startProcessing = function() {
		intervalId = setInterval(self.advanceFrame, self.getInterval());
	}
	this.addEvent = function(newEvent) {
		events.push(newEvent);
	}
	this.getEvents = function() {
		return events;
	}
	this.clearEvents = function() {
		events = [];
	}
}
