const Board = require("./Board");
//Variables para crear la tabla
let x = 6;
let y = 4;
Repetir(3);

function Repetir(int) {
  let firstGen = new Board(x, y);
  let punt;
  let arr = firstGen.table;
  for (let i = 1; i <= int; i++) {
    if (i == 1) console.table(arr);
    punt = firstGen.createScore(arr);
    arr = firstGen.createGeneration(punt, arr);
    //console.table(punt)
    console.table(arr);
  }
}
