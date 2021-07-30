$(document).ready(function () {
  console.log("index.js is working.");

  let inputArr = [];
  let number = "";

  // Removing old result
  function clearScreen() {
    $("#result").html(0);
  }

  // Showing result here
  function result() {
    $("#result").text(inputArr[0]);

    console.log(inputArr);
  }

  // Cleaning data from array for next calculation
  function clearArr() {
    inputArr.splice(0, inputArr.length);
  }

  function numPress() {
    // Click event on any number or operator
    $(".btn__number").click(function () {
      let numStr = $(this).text();

      number = number + numStr;
      $("#result").append(numStr);
    });
  }

  function pushNum() {
    inputArr.push(parseFloat(number));
  }

  // Dividing numbers
  function dividingNumbers() {
    for (i = 0; i <= inputArr.length; i++) {
      if (inputArr[i] === "÷") {
        let division;

        division = inputArr[i - 1] / inputArr[i + 1];

        inputArr.splice(i - 1, 3, division);
        console.log(inputArr);
      }
    }
  }

  // Multiplying numbers
  function multiplyingNumbers() {
    for (i = 0; i <= inputArr.length; i++) {
      if (inputArr[i] === "×") {
        let multiplication;

        multiplication = inputArr[i - 1] * inputArr[i + 1];

        inputArr.splice(i - 1, 3, multiplication);
        console.log(inputArr);
      }
    }
  }

  //Adding numbers
  function addingNumbers() {
    for (i = 0; i <= inputArr.length; i++) {
      if (inputArr[i] === "+") {
        let sum;

        sum = inputArr[i - 1] + inputArr[i + 1];

        inputArr.splice(i - 1, 3, sum);
        console.log(inputArr);
      }
    }
  }

  // Subtracting numbers
  function subtractingNumbers() {
    for (i = 0; i <= inputArr.length; i++) {
      if (inputArr[i] === "−") {
        let subtraction;

        subtraction = inputArr[i - 1] - inputArr[i + 1];
        inputArr.splice(i - 1, 3, subtraction);

        //test
        console.log(inputArr);
      }
    }
  }

  // pushing the last number and operator (because number string waits to complete before pushing to array)
  $(".btn__operator").click(function () {
    const operator = $(this).text();

    pushNum();
    inputArr.push(operator);
    $("#result").append(operator);
    number = "";
    console.log(inputArr);
  });

  // Clear operator
  $(".btn__clear").click(function () {
    clearScreen();
    clearArr();
    console.log(inputArr);
  });

  // Equal to Operator
  $(".btn__operator--equal-to").click(function () {
    const operator = $(this).text();

    // Pushing the last entry into the array
    pushNum();
    number = "";

    console.log(inputArr);

    dividingNumbers();
    multiplyingNumbers();
    addingNumbers();
    subtractingNumbers();

    clearScreen();
    result();
    clearArr();
  });

  function init() {
    numPress();
  }

  init();

  // elements.shopping.addEventListener('click', e=>{
  //     const id = e.target.closest('.shopping__item').dataset.itemid;

  //     // Handle the delete button
  //     if (e.target.matches('.shopping__delete, .shopping__delete *')) {
  //         //Delete from state
  //         state.list.deleteItem(id);
  //         //Delete from UI
  //         listView.deleteItem(id);

  //         // Handle the count update
  //     } else if(e.target.matches('.shopping__count-value')) {
  //         const val = parseFloat(e.target.value, 10);
  //         state.list.updateItem(id, val);
  //     }
  // });
});
