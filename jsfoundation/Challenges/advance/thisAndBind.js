// task-1

const person = {
  name: "John",
  introduce() {
    console.log(`Hi, my name is ${this.name}.`);
  },
};
// const boundIntroduce = person.introduce.bind(person);
// boundIntroduce(); // Output: Hi, my name is John.

// task-2

function introduce() {
  return `Hi, my name is ${this.name}.`;
}
// const person1 = { name: "akshay" };
// const person2 = { name: "saurabh" };
// console.log(introduce.call(person1));
// console.log(introduce.call(person2));

// task-3
function sum(a, b) {
  return (a + b) * this.multiplier;
}

const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };
const context3 = { multiplier: 4 };

console.log(sum.apply(context1, [3, 4]));
console.log(sum.apply(context2, [5, 4]));
console.log(sum.apply(context3, [1, 4]));
