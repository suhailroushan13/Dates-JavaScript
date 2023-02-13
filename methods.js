import clc from "cli-color";
import readline from "readline-sync";
import contiue from "./continue.js";
function methods() {
  let red = clc.red;
  let green = clc.green;
  let yellow = clc.yellow;
  let blue = clc.blue;

  let now = new Date();
  console.log(green("\n\nDate Get Methods"));
  console.log(blue(`Current Date Using : ${yellow(`new Date()`)} ==> ${red(new Date())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getDate()`)} ==> ${red(new Date().getDate())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getDay() 0-Sun,1-Mon`)} ==> ${red(new Date().getDay())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getFullYear()`)} ==> ${red(new Date().getFullYear())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getHours()`)} ==> ${red(new Date().getHours())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getMilliseconds()`)} ==> ${red(new Date().getMilliseconds())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getMinutes()`)} ==> ${red(new Date().getMinutes())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getMonth()`)} ==> ${red(new Date().getMonth())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getSeconds()`)} ==> ${red(new Date().getSeconds())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getTime()`)} ==> ${red(new Date().getTime())}\n\n`));
 
  console.log(green("In GET UTC Formats"));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCDate() )`)} ==> ${red(new Date().getUTCDate())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCDate() )`)} ==> ${red(new Date().getUTCDay())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCFullYear()`)} ==> ${red(new Date().getUTCFullYear())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTHours() `)} ==> ${red(new Date().getUTCHours())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCMillis `)}econds() ==> ${red(new Date().getUTCMilliseconds())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCMinute `)}s() ==> ${red(new Date().getUTCMinutes())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCMonth( `)}) ==> ${red(new Date().getUTCMonth())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCSecond `)}s() ==> ${red(new Date().getUTCSeconds())}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().getUTCMillis `)}econds() ==> ${red(new Date().getUTCMilliseconds())}\n\n`));
  console.log(green("Get Time In Seconds"));
  console.log(blue(`Current Date Using : Date.now() ==> ${red(Date.now())}`));
  console.log(blue(`Current Date Using : ${yellow(`Date.parse(2023, 1, 11, 11, 20, 23, 20 / Or a Date String)`)} ==> ${red(Date.parse(2023, 1, 11, 11, 20, 23, 20))}\n\n`));
  console.log(green("Set Date and Time"));

  console.log(blue(`Current Date Using : ${yellow(`Date.now()`)} ==> ${red(Date.now(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDate()`)} ==> ${red(new Date().setDate(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setFullYear`)}() ==> ${red(new Date(2023, 1, 11, 11, 20, 23, 20).setFullYear(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setHours(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setMilliseconds(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setMinutes(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setMonth(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setSeconds(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setTime(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setDay(2023, 1, 11, 11, 20, 23, 20) `)} ==> ${red(new Date().setUTCDate(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setYear(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setYear(2023, 1, 11, 11, 20, 23, 20))}\n\n`));

  console.log(green("In SET UTC Formats"));

 console.log(blue(`Current Date Using : ${yellow(`new Date(). setUTCDate()`)} ==> ${red(new Date().setDate(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setUTCFullYear`)}() ==> ${red(new Date(2023, 1, 11, 11, 20, 23, 20).setFullYear(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setUTCDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setUTCHours(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setUTCDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setUTCMilliseconds(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setUTCDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setUTCMinutes(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setUTCDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setUTCMonth(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setUTCDate(2023, 1, 11, 11, 20, 23, 20)`)} ==> ${red(new Date().setUTCSeconds(2023, 1, 11, 11, 20, 23, 20))}`));
  console.log(blue(`Current Date Using : ${yellow(`new Date().setUTCDay(2023, 1, 11, 11, 20, 23, 20) `)} ==> ${red(new Date().setUTCDate(2023, 1, 11, 11, 20, 23, 20))}`));

contiue()

}

export default methods;
