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

test('Applies rules for single cell', () => {
  board.cells[1][1] = 0;
  expect(board.Rules(1, 1, 3)).toBe(1);
});

test('Counts Neighbours', () => {
  var x = 2
  var y = 2
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      board.cells[x + j][y + i] = 1;
    }
  }
  espect(board.neighbourCounter(x, y)).toBe(8);
});

