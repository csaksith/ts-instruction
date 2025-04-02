let readline = require("readline-sync");
console.log("Welcome to Hangman!~");
let choice: string = "y";
while (choice == "y") {
  displayHangman(0);
  displayHangman(1);
  displayHangman(2);
  displayHangman(3);
  displayHangman(4);
  displayHangman(5);
  displayHangman(6);
  choice = readline.question("Play again? (y/n): ");
}
console.log("\nGoodbye!~");
function displayHangman(stage: number): void {
  let hangmanImg: string[] = [
    `
          -----
          |   |
          |
          |
          |
          |
          -------
          `,
    `
          -----
          |   |
          |   O
          |
          |
          |
          -------
          `,
    `
          -----
          |   |
          |   O
          |   |
          |
          |
          -------
          `,
    `
          -----
          |   |
          |   O
          |  /|
          |
          |
          -------
          `,
    `
          -----
          |   |
          |   O
          |  /|\\
          |
          |
          -------
          `,
    `
          -----
          |   |
          |   O
          |  /|\\
          |  /
          |
          -------
          `,
    `
          -----
          |   |
          |   O
          |  /|\\
          |  / \\
          |
          -------
          `,
  ];
  return console.log(hangmanImg[stage]);
}
