const input = require("readline-sync");

let name = input.question("Hello! What is your name? ");

console.log("Hello! " + name);

let questionOne = input.question("Is an object a primitive data type? ");

console.log("Your response to question #1: " + questionOne);

let questionTwo = input.question(
  "Can you only create a variable using the keywords let, const, or var? "
);

console.log("Your response to question #2: " + questionTwo);

let questionThree = input.question(
  "Is it true that the keyword typeof is used to find the type of a variable? "
);

console.log("Your response to question #3: " + questionThree);

let questionFour = input.question(
  "What is the ParseFloat() function used for? "
);

console.log("Your response to question #4: " + questionFour);

let questionFive = Number(
  input.question(
    "What number will output if you convert the string '25' into a numerical value using the Number() function? "
  )
);

console.log("Your response to question #1: " + questionFive);

console.log("Congratulations! You have answered all the questions!");
