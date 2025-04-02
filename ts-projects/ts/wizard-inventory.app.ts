import { Item } from "./item.class";

let readline = require("readline-sync");

let items: Item[] = [
  new Item(1, "wooden staff"),
  new Item(2, "wizard hat"),
  new Item(3, "cloth shoes"),
];
console.log("Welcome to the wizard inventory!");
let command: string = "";
while (command != "exit") {
  // display menu
  displayMenu();
  // prompt command
  command = readline.question("Enter command: ");
  // do the command
  switch (command) {
    case "show":
      showItems();
      break;
    case "grab":
      grabItem();
      break;
    case "edit":
      editItem();
      break;
    case "drop":
      dropItem();
      break;
    case "exit":
      break;
  }
  // repeat until exit command
}

console.log("goodbye~");

function displayMenu(): void {
  console.log(
    "\nCOMMAND MENU:\nshow - show all items\ngrab - add an item\nedit - edit an item\ndrop - drop an item\nexit - exit the app\n"
  );
}
function showItems() {
  console.log("\nShow Items");
  for (let item of items) {
    console.log(`${item.id}: ${item.name}`);
  }
}

function grabItem() {
  console.log("\nGrab Items");
  if (items.length == 4) {
    console.log("You can't carry any more items. Please drop an item first.");
  } else {
    let id: number = readline.questionInt("ID?: ");
    let name: string = readline.question("Name?: ");
    let item: Item = new Item(id, name);
    items.push(item);
    console.log(`${name} was added.`);
  }
}

function editItem() {
  console.log("\nEdit Items");
  let id: number = readline.questionInt("ID?: ");
  let item: Item = findItem(id);
  let newName: string = readline.question("New Name: ");
  item.name = newName;
}

function dropItem() {
  console.log("\nDrop Items");
  let id: number = readline.questionInt("Item ID?: ");
  //   let idx:number = 0;
  //   let name:string ="";
  // find the item in the list that matches the id entered
  //   items.forEach((item, index) => {
  //   // remove that item
  //   if (item.id==id){
  //     idx = index;
  //     name = item.name;
  //   }
  let item: Item = findItem(id);
  items.splice(idx, 1);
  console.log(`${name} was removed.`);
}
function findItem(id: number): Item {
  let item: Item = new Item();
  for (let i of items) {
    if (i.id == id) {
      item = i;
      break;
    }
  }
  return item;
}
