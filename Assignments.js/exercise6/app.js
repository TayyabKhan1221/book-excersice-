// question 1

let number = prompt("Enter a number:");

number = parseFloat(number);

let square = number * number;
let cube = number * number * number;
let squareRoot = Math.sqrt(number);
let cubeRoot = Math.cbrt(number);

let resultString =
  "Square: " +
  square +
  "<br/>" +
  "Cube: " +
  cube +
  "<br/>" +
  "Square Root: " +
  squareRoot +
  "<br/>" +
  "Cube Root: " +
  cubeRoot;

document.getElementById("result").innerHTML = resultString;

// question 2
let a = 2,
  b = 1;
let result = --a - --b + ++b + b--;

console.log("a:", a);
console.log("b:", b);
console.log("result:", result);

//question 3

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
  console.log(`Hello, ${name}! Welcome.`);

  rl.close();
});

// question 5

function displayMultiplicationTable(number) {
  number = number || 5;

  let table = "";
  for (var i = 1; i <= 10; i++) {
    table += `${number} x ${i} = ${number * i}\n`;
  }

  console.log(`Multiplication table for ${number}:\n${table}`);
}
displayMultiplicationTable(7);
displayMultiplicationTable();

//question 6

let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");

let totalMarks = 100;

let obtainedMarks1 = parseInt(
  prompt("Enter obtained marks for " + subject1 + ":")
);

let obtainedMarks2 = parseInt(
  prompt("Enter obtained marks for " + subject2 + ":")
);
let obtainedMarks3 = parseInt(
  prompt("Enter obtained marks for " + subject3 + ":")
);

let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

console.log("Subject\tTotal Marks\tObtained Marks");
console.log(subject1 + "\t" + totalMarks + "\t\t" + obtainedMarks1);
console.log(subject2 + "\t" + totalMarks + "\t\t" + obtainedMarks2);
console.log(subject3 + "\t" + totalMarks + "\t\t" + obtainedMarks3);

console.log("\nTotal Obtained Marks: " + totalObtainedMarks);
console.log("Total Percentage: " + totalPercentage.xed(2) + "%");
