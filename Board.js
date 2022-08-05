module.exports = class Board {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.table = this.createDimensions();
  }
  createDimensions() {
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < this.y; i++) {
      for (let j = 0; j < this.x; j++) {
        let x = Math.floor(Math.random() * 2);
        array2.push(x);
      }
      array1.push(array2);
      array2 = [];
    }
    this.table = array1;
    return this.table;
  }

  Puntaje(array) {
    let puntaje = [];
    let pun = [];
    var contador = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[1].length; j++) {
        contador = 0;
        for (let l = i - 1; l <= i + 1; l++) {
          for (let k = j - 1; k <= j + 1; k++) {
            if (l <= -1 || l >= array.length) break;
            if (k <= -1 || k >= array.length * array[1].length) break;
            if (array[l][k] == 1) {
              contador++;
            }
          }
        }
        pun.push(contador);
      }
      puntaje.push(pun);
      pun = [];
    }
    return puntaje;
  }
  Interaccion(puntaje, array) {
    let result = [];
    let res = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[1].length; j++) {
        if (array[i][j] == 1) {
          if (puntaje[i][j] == 3 || puntaje[i][j] == 4)
            //Cualquier celda viva con dos o tres vecinos vivos vive en la próxima generación.
            res.push(1);
          else if (puntaje[i][j] < 3 || puntaje[i][j] > 4)
            //celula muere si tiene menos de 2 celulas vivas vecinas
            //celula muere si tiene mas de 3 celulas vivas vecinas
            res.push(0);
        }
        //Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.
        else if (array[i][j] == 0 && puntaje[i][j] == 3) {
          res.push(1);
        } else res.push(0);
      }

      result.push(res);
      res = [];
    }
    return result;
  }
};
