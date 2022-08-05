//import Board from '../Board.js';
const Board = require('../Board');
const board = new Board(6, 6);

beforeAll(() => {
  board.createDimensions()
});

test('creates dimentions', () => {
    var tempArray = board.createDimensions();
    expect(board.createDimensions().lenght).toBe(tempArray.lenght());
});

