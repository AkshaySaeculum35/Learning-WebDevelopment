// task-1

const Person = {
  name: "John",
  age: 30,
  introduce: function () {
    return `Hi, my name is ${this.name} and i am ${this.age} years old.`;
  },
};
// console.log(Person.introduce());

// task-2

const outer = () => {
  const inner = () => {
    console.log("Hello, I am inner function");
  };
  return inner();
};
console.log(outer());
