#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstnumber" },
  { message: "Enter Second Number", type: "number", name: "secondnumber" },
  {
    message:
      "select one of the operators to perform operation which are following",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
//condition statement
if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
}
console.log("End done");

// (package.json)version me first 1 mean major change in ts... second 0 means minor change in ts.. third 2 means minot text chnge
