<html>
<head>
<title>Game of Life</title>
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.4.custom.min.js"></script>
<script type="text/javascript" src="js/gameoflife.js"></script>
<script type="text/javascript" src="js/canvasengine.js"></script>
<script type="text/javascript">
var game = new GameOfLife();
var engine = new CanvasEngine();
engine.setInterval(30);
var blockSize = 50;
var currentState = ([
				[ 0,0,0,0,0,0,0,0,0,0 ],
				[ 0,0,0,1,0,0,0,0,0,0 ],
				[ 0,1,1,0,0,0,0,0,0,0 ],
				[ 0,0,1,1,0,0,0,0,0,0 ],
				[ 0,0,0,0,0,0,0,0,0,0 ],
				[ 0,0,0,0,0,0,0,0,0,0 ],
				[ 0,0,0,0,0,0,0,0,0,0 ],
				[ 0,0,0,0,0,0,0,0,0,0 ],
				[ 0,0,0,0,0,0,0,0,0,0 ],
				[ 0,0,0,0,0,0,0,0,0,0 ]
				]);
game.setState(currentState);

var drawing = false;
var drawingState = null;
var animating = false;

engine.inputRoutine = function(eventsToProcess) { 

	function markcell(x, y) {
		if( (undefined !== currentState[Math.floor(y/blockSize)]) &&
			(undefined !== currentState[Math.floor(y/blockSize)][Math.floor(x/blockSize)]) ) {
			if(drawingState == null) {
				 drawingState = currentState[Math.floor(y/blockSize)][Math.floor(x/blockSize)];
			}

			newState = drawingState*-1 +1;

			if (currentState[Math.floor(y/blockSize)][Math.floor(x/blockSize)] != newState) {
				currentState[Math.floor(y/blockSize)][Math.floor(x/blockSize)] = newState;
			}
		}
	}

	for (ev in eventsToProcess) {
		switch(eventsToProcess[ev].type) {
			case 'mousedown':
				drawing = true;
				markcell(eventsToProcess[ev].offsetX, eventsToProcess[ev].offsetY);
				break;
			case 'mousemove':
				if(drawing) {
					markcell(eventsToProcess[ev].offsetX, eventsToProcess[ev].offsetY);
				}
				break;
			case 'mouseup':
				if(drawing) {
					markcell(eventsToProcess[ev].offsetX, eventsToProcess[ev].offsetY);
				}
				drawing = false;
				drawingState = null;
				break;
		}
	}
	game.setState(currentState);
}
engine.logicRoutine = function() { game.evolve(); currentState = game.getState(); }
engine.drawRoutine = function() { drawState(currentState); }

$(window).resize(function() {
	resizeWindow();
});

$(document).ready(function(){
	resizeWindow();
	engine.startProcessing();

	$('#display_image').unbind();
	$('#display_image').mousedown(engine.addEvent)
						.mousemove(engine.addEvent)
						.mouseup(engine.addEvent);

	$('#play').click(function() {
		engine.setProcessLogic(!engine.getProcessLogic());
	});

	function mDown(event) {
		drawing = true;
		markcell(event.offsetX, event.offsetY);
		return false;
	}

	function mMove(event) {
		if(!drawing) {
			return;
		}
		markcell(event.offsetX, event.offsetY);
		return false;
	}

	function mUp(event) {
		if(!drawing) {
			return;
		}
		markcell(event.offsetX, event.offsetY);
		drawing = false;
		drawingState = null;
		return false;
	}

});

function resizeWindow() {
	$('#display_image').height($(document).height()-blockSize);
	$('#display_image').width($(document).width());
	canvas = document.getElementById('display_image');
	canvas.width = $(document).width();
	canvas.height = $(document).height()-blockSize;
	drawState(currentState);
}

function drawState(state) {
	try {
		canvas = document.getElementById('display_image');
		context = canvas.getContext('2d');
		context.clearRect(0,0,$(document).height(), $(document).width());
		context.strokeStyle = '#fff';
		context.linewidth = 1;
		context.fillStyle = '#fff';
		for (y in state) {
			for (x in state[y]) {
				if(state[y][x] == 0) {
					context.strokeRect( (x*blockSize)+(blockSize*.1), (y*blockSize)+(blockSize*.1), blockSize*.8, blockSize*.8 );
				} else {
					context.fillRect( (x*blockSize)+blockSize*.1, (y*blockSize)+(blockSize*.1), blockSize*.8, blockSize*.8 );
				}
			}
		}
	} catch (exception) {
		
	}
}

</script>
<style>
body {
	background-color: #000;
	color: #fff;
	overflow: hidden;
	margin: 0px;
	padding: 0px;
}

#display_image {
//	width: 300px;
//	height: 200px;
	margin: 0px;
	padding: 0px;
	border-width: 0px;
}

#controls {
	width: 100px;
}

#container {
	border: 0px;
	margin: 0px;
	padding: 0px;
	height: 100px;
}

</style>
</head>
<body>
<input type="button" name="play" id="play" value="Play/Pause"/><br/>
<canvas id="display_image">Your browser doesn't support Canvas.</canvas>
</body>
</html>

