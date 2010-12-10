// Canvas Engine Test
jsUnity.attachAssertions();

jsUnity.run(testSuite1);

function testSuite1() {
	engine = null;

	function setUp() {
		engine = new CanvasEngine();
	}

	function testIntervalAccessor() {
		assertEqual(200, engine.getInterval());
		engine.setInterval(100);
		assertEqual(100, engine.getInterval());
	}

	function testProcessLogicAccessor() {
		assertEqual(true, engine.getProcessLogic());
		engine.setProcessLogic(false);
		assertEqual(false, engine.getProcessLogic());
	}

	function testInputRoutine() {
		var test = false;
		var testRoutine = function() {
			test = true;
		}
		engine.inputRoutine = testRoutine;
		engine.inputRoutine();
		assertEqual(true, test);
	}

	function testLogicRoutine() {
		var test = false;
		var testRoutine = function() {
			test = true;
		}
		engine.logicRoutine = testRoutine;
		engine.logicRoutine();
		assertEqual(true, test);
	}

	function testDrawRoutine() {
		var test = false;
		var testRoutine = function() {
			test = true;
		}
		engine.drawRoutine = testRoutine;
		engine.drawRoutine();
		assertEqual(true, test);
	}

	function testAdvanceFrameRoutineLogic() {
		var test1 = false;
		var test2 = false;
		var test3 = false;
		var testRoutine1 = function() {
			test1 = true;
		}
		var testRoutine2 = function() {
			test2 = true;
		}
		var testRoutine3 = function() {
			test3 = true;
		}
		engine.inputRoutine = testRoutine1;
		engine.logicRoutine = testRoutine2;
		engine.drawRoutine = testRoutine3;
		engine.advanceFrame();
		assertEqual(true, test1);
		assertEqual(true, test2);
		assertEqual(true, test3);
	}

	function testAdvanceFrameRoutineNoLogic() {
		var test1 = false;
		var test2 = false;
		var test3 = false;
		var testRoutine1 = function() {
			test1 = true;
		}
		var testRoutine2 = function() {
			test2 = true;
		}
		var testRoutine3 = function() {
			test3 = true;
		}
		engine.setProcessLogic(false);
		engine.inputRoutine = testRoutine1;
		engine.logicRoutine = testRoutine2;
		engine.drawRoutine = testRoutine3;
		engine.advanceFrame();
		assertEqual(true, test1);
		assertEqual(false, test2);
		assertEqual(true, test3);
	}

	function testEventAccessor() {
		var simulatedEvent = document.createEvent("MouseEvent");
		simulatedEvent.initMouseEvent(
			"mousedown", true, true, window, 1, 
			1, 2, 
			3, 4, false, 
			false, false, false, 0/*left*/, null);
		engine.addEvent(simulatedEvent);
		events = engine.getEvents();
		assertEqual(1, events.length);
		assertEqual(simulatedEvent.layerX, events[0].layerX);
		engine.clearEvents();
		events = engine.getEvents();
		assertEqual(0, events.length);
	}

	function testEventProcessor() {
		var simulatedEvent = document.createEvent("MouseEvent");
		simulatedEvent.initMouseEvent(
			"mousedown", true, true, window, 1, 
			1, 2, 
			3, 4, false, 
			false, false, false, 0/*left*/, null);
		var testRoutine1 = function(eventsToProcess) {
			for (ev in eventsToProcess) {
				eventsProcessed++;
			}
		}
		engine.inputRoutine = testRoutine1;
		engine.addEvent(simulatedEvent);
		eventsProcessed = 0;
		engine.advanceFrame();
		assertEqual(1, eventsProcessed);
		events = engine.getEvents();
		assertEqual(0, events.length);
	}

}
