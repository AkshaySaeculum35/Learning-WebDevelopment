// task-1

function filterArr(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") newArr.push(arr[i]);
  }
  return newArr;
}

let numbers = [1, 2, 10, "hello", 4, 5];
// console.log(filterArr(numbers)); // [1, 2, 3, 4,5]

// task-2

function reverseArr(arr) {
  arr.reverse();
  return arr;
}

// console.log(reverseArr(numbers));

// task-3

function findMax(arr) {
  let newArr = filterArr(arr);
  let max = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] > max) max = newArr[i];
  }
  return max;
}

// console.log(findMax(numbers));

// task-4

function removeDup(arr) {
  let s = new Set(arr);
  return [...s];
}

// console.log(removeDup([23, 33, 12, 4, 33, 23]));

// task-5

function flat(arr) {
  let newArr = arr.flat(Infinity);
  return newArr;
}

console.log(flat([1, [3, 3, 4], 4, 5]));
