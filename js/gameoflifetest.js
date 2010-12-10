jsUnity.attachAssertions();

jsUnity.run(testSuite1);

function testSuite1() {
	game = null;

	function setUp() {
		game = new GameOfLife();
	}

    function testStateAccessor() {
		assertEqual([[0]], game.getState());
		state = [	[0,0,0,0,0],
					[1,1,1,1,1],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0] ];
		game.setState(state);
		assertEqual(state, game.getState());
	}

	function testStateAccessorCloning() {
		state = [[0]];
		game.setState(state);
		newState = game.getState();
		newState[0][0] = 1;
		assertNotEqual(state, newState);
	}

	function testStateCloning() {
		state = [[0]];
		newState = game.cloneState(state);
		newState[0][0] = 1;
		assertNotEqual(state, newState);
	}

	function testStateAccessorException() {
		assertException(function() {
			game.setState('1');
		});

		assertException(function() {
			game.setState([]);
		});

		assertException(function() {
			game.setState(['1']);
		});

		assertException(function() {
			game.setState([[]]);
		});

		assertException(function() {
			game.setState([ [1,1,1],
							[0,null,0],
							[0,0,0] ]);
		});

		assertException(function() {
			game.setState([ [1,1,1],
							[0,state[99],0],
							[0,0,0] ]);
		});

	}

	function testNumberOfNeighbors() {
		state = [	[0,0,0,0,0],
					[1,1,1,1,1],
					[1,0,1,0,0],
					[1,1,1,0,0],
					[0,0,0,0,0] ];
		//game.setState(state);
		
		assertEqual(3, game.numberOfNeighbors(0, 0, state));
		assertEqual(1, game.numberOfNeighbors(4, 4, state));
		assertEqual(8, game.numberOfNeighbors(1, 2, state));
	}

	function testEvolve() {
		state = [	[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,1,0,0],
					[0,1,0,1,0],
					[0,0,0,0,0] ];
		game.setState(state);

		targetstate = [	[0,0,0,0,0],
						[0,0,0,0,0],
						[0,0,1,0,0],
						[0,0,1,0,0],
						[0,0,0,0,0] ];
		
		game.evolve();

		gamestate = game.getState();
		assertEqual(targetstate, gamestate);
	}

	function testEvolve2() {
		state = [	[0,0,0,0,0],
					[0,0,0,0,0],
					[0,1,1,1,0],
					[0,1,0,1,0],
					[0,1,1,1,0] ];
		game.setState(state);

		targetstate = [	[0,0,1,0,0],
						[0,0,1,0,0],
						[0,1,0,1,0],
						[1,0,0,0,1],
						[0,1,0,1,0] ];
		
		game.evolve();

		gamestate = game.getState();
		assertEqual(targetstate, gamestate);
	}


}
