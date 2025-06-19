// task 1

function stringToNumber(input) {
  const num = Number(input);
  if (isNaN(num)) return "Not a number";
  return num;
}
// console.log(stringToNumber("4"));

// task 2

function flipBoolean(input) {
  return !Boolean(input);
}
// console.log(flipBoolean("00"));

// task 3

function whatAMI(input) {
  const type = typeof input;
  return `I am a ${type}`;
}
// console.log(whatAMI("aks"));

//task 4

function isItTruthy(value) {
  if (Boolean(value) === true) return "It's truthy";

  return "It's falsy";
}

console.log(isItTruthy(undefined));
