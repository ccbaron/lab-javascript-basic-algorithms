// Iteration 1: Names and Input

let driver = "Christian";
let navigator = "Javier";

console.log(`[iteration 1]: The driver's name is ${driver}`);
console.log(`[iteration 1]: The navigator's name is ${navigator}`);

// Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(
    `[iteration 2]: The driver has the longest name, it has ${driver.length} characters.`
  );
}
else if (driver.length < navigator.length) {
  console.log(
    `[iteration 2]: It seems that the navigator has the longest name, it has ${navigator.length} characters.`
  );
}
else {
    console.log(
        `[iteration 2]: Wow, you both have equally long names, ${driver.length} characters!`
    );
 }

// Iteration 3: Loops

let driverUpperCase = driver.toUpperCase();
let driverSeparated = driverUpperCase.split("").join(" ");
console.log(`[iteration 3]: ${driverSeparated}`);