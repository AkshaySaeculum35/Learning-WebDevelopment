const person = {
  name: "akshay",
  greet() {
    console.log(`hii i am ${this.name}`);
  },
};
person.greet();

const greetFun = person.greet;
greetFun();

const boundGreet = person.greet.bind({ name: "john" });
boundGreet();

//bind,call and apply
