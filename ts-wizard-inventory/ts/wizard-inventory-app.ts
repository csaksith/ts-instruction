import { Item } from "./item.class";

let readline = require("readline-sync");
console.log("Welcome to the Wizard Inventory App!");
console.log(
  "\nCOMMAND MENU:\nshow - show all items\ngrab - grab an item\nedit - edit an item\ndrop - drop an item\nexit - exit program"
);
let choice = "y";
let command: string = "";
let items: Item[] = [
  new Item(0, "wooden staff"),
  new Item(1, "wizard hat"),
  new Item(2, "cloth shoes"),
];
function updateId(items: Item[]){
    for (let i = 0; i < items.length; i++) {
        items[i].id = i;
    }
}
while (choice == "y") {
  command = readline.question("\nCommand: ").toLowerCase();
  switch (command) {
    case "show":
      for (let item of items) {
        console.log(item.details());
      }
      break;
    case "grab":
      if (items.length >= 4) {
        console.log("You can't carry any more items. Drop something");
      } else {
        let itemName: string = readline.question("Name: ");
        items.push(new Item(items.length, itemName));
        console.log(`${itemName} was added.`);
      }
      break;
    case "edit":
      let itemId: number = readline.questionInt("Number: ");
      if (itemId < 1 || itemId > items.length) {
        console.log("Invalid item number.");
        break;
      }
      let newName: string = readline.question("Updated name: ");
      items[itemId - 1].name = newName;
      console.log(`Item number ${itemId} was updated to ${newName}`);
      break;
    case "drop":
      let dropId: number = readline.questionInt("Number: ");
      if (dropId < 1 || dropId > items.length) {
        console.log("Invalid item number.");
        break;
      }

      let droppedItem: Item = items[dropId - 1];
      items.splice(dropId - 1, 1);
      console.log(`${droppedItem.name} was dropped.`);
      updateId(items);
      break;
    case "exit":
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid command. Try again.");
      break;
  }
  choice = readline.question("Continue? (y/n): ").toLowerCase();
}
