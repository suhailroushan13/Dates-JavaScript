import intro from "./intro.js";
import methods from "./methods.js";
import readline from "readline-sync";
import clc from "cli-color";
let red = clc.red;
let green = clc.green;
let yellow = clc.yellow;
let blue = clc.blue;
export default function main() {
  console.clear();
  console.log(yellow("==========================="));
  console.log("Welcome To JavaScript Dates");
  console.log(yellow("==========================="));

  let options = ["For Introduction", "For Methods"];
  options.forEach((value, index) => {
    console.log(`${index + 1}. ${value}`);
  });

  let input = readline.questionInt("Enter The Option : ");
  if (input == 1) {
    intro();
  } else if (input == 2) {
    methods();
  } else {
    main();
  }
}
main();
