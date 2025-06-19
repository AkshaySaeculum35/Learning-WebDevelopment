//Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance); //number
// console.log(typeof anotherBalance); //object

//Boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and undefined
let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

// let firstname1 = null;
// console.log(firstname1);

//string

let myString = "hello";
let myStringOne = "hola";
let username = "akshay";

let oldGreet = myString + " " + "akshay";
// console.log(oldGreet);

let greetMessage = `hello ${username} !`;
let demoOne = `value is ${2 * 2}`;
// console.log(demoOne);

let sm1 = Symbol("akshay");
let sm2 = Symbol("akshay");

// console.log(sm1 == sm2);
console.log(sm1 == sm2);
console.log(sm1);
