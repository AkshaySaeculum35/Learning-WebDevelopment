function Person(name, age) {
  if (age <= 0) throw new Error("Age must be a positive number");
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `hello, my name is ${this.name}`;
  };
}

const per = new Person("John", 0);
console.log(per.greet()); // hello, my name is John
