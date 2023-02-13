import readline from "readline-sync";
import clc from "cli-color";
import contiue from "./continue.js";
function intro() {
  let red = clc.red;
  let green = clc.green;
  let yellow = clc.yellow;
  let blue = clc.blue;
  // Dates in JavaScript
  // Date Object
  console.log("The Date object works with dates and times.");
  console.log("Date objects are created with new Date().\n");
  console.log(
    blue("There are four ways of instantiating (creating) a date:\n")
  );

  console.log(
    yellow(
      `1. new Date()\n2. new Date(milliseconds)\n3. new Date(dateInString)\n4. new Date(year,month,day,hour,minute,seconds,milliseconds)\n\n`
    )
  );

  let a1 = new Date();
  console.log(`With ${blue(`new Date()`)} =====> ${red(a1)}`);

  let a2 = new Date(1676254115000);
  console.log(`With ${blue(`new Date(1676254115000)`)} =====> ${red(a2)}`);

  let a3 = new Date("11 Feb 2022");
  console.log(`With ${blue(`new Date("11th Feb 2022")`)} =====> ${red(a3)}`);

  let a4 = new Date(2023, 1, 11, 11, 20, 23, 20);
  console.log(
    `With ${blue(`new Date(2023, 01, 11, 11, 20, 23, 20)`)} =====> ${red(
      a4
    )}\n\n`
  );

  console.log(yellow("Converting Date Into MilliSeconds\n"));

  let b1 = Date.parse(new Date());
  console.log(`With ${blue(`Date.parse(new Date());)`)} =====> ${red(b1)}`);
  console.log("OR");
  let b2 = Date.parse(
    "Sat Feb 11 2023 11:20:23 GMT+0000 (Coordinated Universal Time)"
  );
  console.log(
    `With ${blue(
      "Date.parse('Sat Feb 11 2023 11:20:23 GMT+0000 (Coordinated Universal Time)'"
    )} =====> ${red(b2)}\n\n`
  );

  console.log(yellow("Converting Date Any Standard TimeZone\n"));

  let c1 = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  console.log(
    `With ${blue(
      `new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata",}`
    )} =====> ${red(c1)}`
  );
  console.log("OR");

  let c2 = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    month: "numeric",
    day: "2-digit",
    year: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "numeric",
    second: "2-digit",
    dayPeriod: "long",
  });
  console.log(
    yellow(` let date = new Date().toLocaleString("en-US",
//     {
//         timeZone: "Asia/Kolkata",
//         month: "numeric",
//         day: "2-digit",
//         year: "numeric",
//         weekday: "long",
//         hour: "2-digit",
//         minute: "numeric",
//         second: "2-digit",
//         dayPeriod: "long",
//     })`)
  );
  console.log(`=====> ${red(c2)}\n\n`);
  contiue();
}

export default intro;
