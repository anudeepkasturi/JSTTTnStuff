

class Board {
  constructor(){
    this.grid = [[ 1,false ,false ],[ false,1 ,false ],[ 1, 3,1 ]];
  }

  isWon() {
    if( this.wonHoriz(this.grid) || this.wonDiag(this.grid) || this.wonVert() ) {
      return true;
    } else {
      return false;
    }
  }

  winner() {
    if (this.isWon()) {
      return [this.wonHoriz(this.grid), this.wonDiag(this.grid), this.wonVert()].filter(
        elem => elem !== false)[0]
    }
  }

  isEmpty(pos) {
    if (this.grid[pos[0]][pos[1]]) {
      return false;
    } else {
      return true;
    }
  }

  placeMark(pos, mark) {
    if (this.isEmpty(pos)) {
      this.grid[pos[0]][pos[1]] = mark
      return true
    } else {
      return false
    }
  }

  wonHoriz(array) {
    let result = false;
    array.forEach( (row) => {
      if (row.every(elem => elem === row[0])) {
        result = row[0];
      }
    })
    return result
  }

  wonVert() {
    let transposed = this.transpose();
    return this.wonHoriz(transposed);
  }

  wonDiag() {
    let diags = [[this.grid[0][0], this.grid[1][1], this.grid[2][2]],
    [this.grid[0][2], this.grid[1][1], this.grid[2][0]]];

    return this.wonHoriz(diags);
  }

  transpose() {
    let trans = new Array(new Array(3),new Array(3),new Array(3));
    for (var i = 0; i < this.grid[0].length; i++) {
      for (var j = 0; j < this.grid.length; j++) {
        trans[j][i] = this.grid[i][j];
      }
    }
    return trans;
  }

  play(completionCallBack) {


  }
}


let board = new Board;
console.log(board.winner());
console.log(board.grid)
