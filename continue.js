import readline from "readline-sync";
import main from "./app.js";
import methods from "./methods.js";
function contiue() {
  let options = ["For Main Menu", "For Methods"];
  options.forEach((value, index) => {
    console.log(`${index + 1}. ${value}`);
  });

  let input = readline.questionInt("Enter The Option : ");
  if (input == 1) {
    main();
  } else {
    methods();
  }
}

export default contiue;
