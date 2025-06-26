// task-1

const createCounter = () => {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// task-2

const rateLimiter = (fn, limit) => {
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    console.log(now);

    const timeDiff = now - lastCallTime;
    if (timeDiff >= limit) {
      lastCallTime = now;
      return fn.apply(this, args);
    } else {
      return "Rate limit exceeded";
    }
  };
};

// const limitedFunction = rateLimiter(console.log, 5000);
// console.log(limitedFunction("Hello, world!"));
// //logs "Hello, world!" to the console
// console.log(limitedFunction("Hello, world!")); // returns "Rate limit exceeded"

// task-3

function memorize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Fetching from cache for args:", args);
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
function add(a, b) {
  console.log("Calculating...");
  return a + b;
}

const memoAdd = memorize(add); // Create a memoized version

// Test
console.log(memoAdd(2, 3)); // Logs: Calculating... → 5
console.log(memoAdd(2, 3)); // Logs: Fetching from cache for args: [2, 3] → 5
console.log(memoAdd(4, 5)); // Logs: Calculating... → 9
