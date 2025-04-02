// while loop - choice equals 'y'
let rl = require('readline-sync');
let choice: string = 'y';

while (choice == 'y') {
  // index for loop
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  // for of loop
let names:string[]=['Jim','Andy','Nick','Adrian','Celina','Heath','Joe','Christian'];
for (let s of names){
    console.log("student ",s);
}

names.sort();
names.forEach(str=>console.log(`name is ${str} `));


choice = rl.question("Continue? (y/n): ").toLowerCase();
if (choice == 'z'){
    console.log('z entered');
}

}
