// task-1

const squareNumbers = (arr) => {
  let squaredNum = arr.map((num) => num * num);
  return squaredNum;
};

// console.log(squareNumbers([2, 3, 4, 5]));

// task-2
const filterEvenNumbers = (arr) => {
  let evenNums = arr.filter((num) => num % 2 === 0);
  return evenNums;
};

// console.log(filterEvenNumbers([2, 3, 5, 6, 6, 9]));

// task-3

const sumPositiveNumbers = (arr) => {
  let sum = 0;
  let positiveNum = arr.filter((num) => num > 0);
  sum = positiveNum.reduce((acc, curVal) => acc + curVal, sum);
  return sum;
};
// console.log(sumPositiveNumbers([2, 4, 5, 2, -4, -6]));

// task-4

const getNames = (arr) => {
  let names = arr.map((obj) => obj.name);
  return names;
};
// console.log(
//   getNames([
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 35 },
//   ])
// );

// task-5
const longestWord = (arr) => {
  let longestWord = arr.reduce((long, curVal) => {
    return curVal.length > long.length ? curVal : long;
  }, "");
  return longestWord;
};
// console.log(longestWord(["apple", "banana", "cherrry", "date"]));
