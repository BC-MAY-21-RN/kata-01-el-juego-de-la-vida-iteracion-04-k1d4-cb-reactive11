//import Board from '../Board.js';
const Board = require('../Board');
const board = new Board(6, 6, 3, 6);

beforeAll(() => {
  board.start()
  console.table(board.cells)
});

test('Advances Cicles', () => {
  var CellsBefore = board.cells;
  expect(board.Cicles()).not.toBe(CellsBefore);
});

