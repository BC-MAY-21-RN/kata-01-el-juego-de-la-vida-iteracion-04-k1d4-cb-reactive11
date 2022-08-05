import Board from './Board.js';

Repetir(3);

function Repetir(int) {
  let firstGen = new Board(6, 4);
  let punt;
  let arr = firstGen.table;
  for (let i = 1; i <= int; i++) {
    if (i == 0) console.table(arr);
    punt = firstGen.Puntaje(arr);
    arr = firstGen.Interaccion(punt, arr);
    //console.table(punt)
    console.table(arr);
  }
}