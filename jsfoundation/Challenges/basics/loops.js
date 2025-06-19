// task-1

function sumN(n) {
  let sum = (n * (n + 1)) / 2;
  return sum;
}

// console.log(sumN(50));

function table(n) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    let line = `${n} * ${i} = ${n * i}`;
    table.push(line);
  }
  return table;
}
// console.log(table(5));

function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
    if (
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      count++;
    }
  }
  return count;
}
console.log(vowels("aksh"));
