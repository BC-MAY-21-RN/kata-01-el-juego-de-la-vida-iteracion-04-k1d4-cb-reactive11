module.exports = class Board {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.array = [];
    this.score = [];
    this.table = this.createDimensions();
  }
  createDimensions() {
    let array = [];
    let arrayControl = [];
    for (let i = 0; i < this.y; i++) {
      for (let j = 0; j < this.x; j++) {
        let x = Math.floor(Math.random() * 2);
        arrayControl.push(x);
      }
      array.push(arrayControl);
      arrayControl = [];
    }
    this.table = array;
    return this.table;
  }

  createScore(array) {
    let score = [];
    let pun = [];
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[1].length; j++) {
        cont = 0;
        for (let l = i - 1; l <= i + 1; l++) {
          for (let k = j - 1; k <= j + 1; k++) {
            if (l <= -1 || l >= array.length || k <= -2 || k >= array[1].length)
              break;
            if (array[l][k] == 1) cont++;
          }
        }
        pun.push(cont);
      }
      score.push(pun);
      pun = [];
    }
    return score;
  }
  createGeneration(score, array) {
    let result = [];
    let res = [];
    this.array = array;
    this.score = score;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[1].length; j++) {
        res.push(this.rules(i, j));
      }
      result.push(res);
      res = [];
    }
    return result;
  }
  rules(i, j) {
    if (this.array[i][j] == 1) {
      if (this.score[i][j] == 3 || this.score[i][j] == 4)
        //Cualquier celda viva con dos o tres vecinos vivos vive en la próxima generación.
        return 1;
      else if (this.score[i][j] < 3 || this.score[i][j] > 4)
        //celula muere si tiene menos de 2 celulas vivas vecinas
        //celula muere si tiene mas de 3 celulas vivas vecinas
        return 0;
    }
    //Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.
    else if (this.array[i][j] == 0 && this.score[i][j] == 3) {
      return 1;
    } else return 0;
  }
};
