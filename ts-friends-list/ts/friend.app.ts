import { Friend } from "./friend.class";

console.log("Welcome to the friend app~");

let f1: Friend = new Friend(1, "Misha", 2023, "misha@gmail.com", true);
let f2: Friend = new Friend(2, "Nori", 2020, "nori@gmail.com", true);
let f3: Friend = new Friend(3, "Jason", 1989, "jason@gmail.com", false);
let f4: Friend = new Friend(4, "Amira", 1997, "amira@gmail.com", false);
let f5: Friend = new Friend(5, "Naomi", 1998, "naomi@gmail.com", false);
console.log("Name\tAge\tEmail\t\tBFF");
console.log(f1.details());
console.log(f2.details());
console.log(f3.details());
console.log(f4.details());
console.log(f5.details());
