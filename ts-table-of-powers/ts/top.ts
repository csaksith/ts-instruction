let readline = require("readline-sync");
console.log("Welcome to the Squares and Cubes Table!~");
let choice = "y";
while (choice == "y") {
  let nbr: number = readline.questionInt("Enter a integer: ");
  console.log("Number\tSquare\tCube");
  console.log("======\t======\t=====");
  for (let i = 1; i <= nbr; i++) {
    console.log(`${i}\t${i * i}\t${i * i * i}`);
  }
  choice = readline.question("Continue? (y/n): ");
}
console.log('goodbye~!');
