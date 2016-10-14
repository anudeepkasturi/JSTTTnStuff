const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[1,2,3], [], []];
  }

  promptMove(move, completionCallback) {
    console.log(this.stacks);
    let that = this;
    reader.question("From stack", function(start) {
      reader.question("To stack", function(end) {
        const startTowerIdx = Number(start);
        const endTowerIdx = Number(end);
        move.call(that, startTowerIdx, endTowerIdx);
        if (!that.isWon()) {
          that.promptMove(move)
        }
        else {
          completionCallback();
        }
      })
    })
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    return !(this.stacks[startTowerIdx][0] > this.stacks[endTowerIdx][0]);
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let disc = this.stacks[startTowerIdx].shift();
      this.stacks[endTowerIdx].unshift(disc);
      return true;
    }
    else {
      return false;
    }
  }

  printstacks() {
    console.log(this.stacks);
  }

  isWon() {
    let result = false;
    this.stacks.slice(1, this.stacks.length).forEach( (stack) => {
      if (stack.length === 3) {
        result = true;
      }
    })
    return result;
  }

  run(completionCallback) {
    this.promptMove(this.move, completionCallback);
  }
}

module.exports = Game;
