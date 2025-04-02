let readline = require("readline-sync");
console.log("Welcome to the Factorial Calculator!~");
let choice = "y";
while (choice == "y") {
  let nbr: number = readline.questionInt(
    "Enter an integer that's greater than 0 and less than 10: "
  );
  let fact: number = 1;
  for (let i = 1; i <= nbr; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${nbr} is ${fact}`);
  choice = readline.question("Continue? (y/n): ");
}

console.log("goodbye~!");
