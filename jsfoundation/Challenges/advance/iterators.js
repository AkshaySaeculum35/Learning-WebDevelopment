function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

function rangeIterotor(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

// const iter = rangeIterotor(4, 5);
// console.log(iter.next().value); // 4
// console.log(iter.next().value); // 5
// console.log(iter.next().value); // undefined

// task-3

function* fibonacciGenerator() {
  let a = 1,
    b = 1;
  yield a;
  yield b;
  while (true) {
    const next = a + b;
    yield next;
    a = b;
    b = next;
  }
}
const fib = fibonacciGenerator();

console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
