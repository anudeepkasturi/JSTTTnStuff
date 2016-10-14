const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("What number do you want to add?", function (number) {
      number = parseInt(number, 10);
      sum += number;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback)
    })
  }
  else {
    completionCallback(sum)
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr)
    }
  }
  outerBubbleSortLoop(true)
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function (answer) {
    (answer === "yes") ? callback(true) : callback(false);
  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } else if ( i == (arr.length - 1) ) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubbleSort([3, 87, 1, 88, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
// innerBubbleSort([8,342,78,24,6,2], 0, false, absurdBubbleSort);
