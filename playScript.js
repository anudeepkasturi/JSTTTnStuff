const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Game = require("./towers");

function completionCallback() {
  console.log("You won!");
  reader.question("Would you like to play again?",
  (answer) => {
    if (answer === 'yes') {
      let game = new Game;
      game.run(completionCallback);
    }
    else {
      reader.close();
    }
  }
)
};


let game = new Game;
game.run(completionCallback);
