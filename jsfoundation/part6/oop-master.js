let car = {
  make: "toyota",
  model: "camry",
  year: "2020",
  start: function () {
    return `${this.make} car git started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 30);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.hitesh = function () {
  return `custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());

let myNewArr = [1, 2, 3, 4];
// console.log(myNewArr.hitesh());

//=============================================

//Inheritance

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is ia car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : this is an inheritence example`;
  }
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("toyota", "Corolla");
// console.log(vehOne.make);

//==================================

//Encapsulation

class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

//===============================================
// Abstraction

class CoffeMachine {
  start() {
    //call db
    //filter value

    return `starting the machine`;
  }
  brewCoffee() {
    //complex calculation

    return `Brewing coffee`;
  }

  pressStartButton() {
    let mess1 = this.start();
    let mess2 = this.brewCoffee();
    return `${mess1} + ${mess2}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

//=====================================
//Polymorphism

class Bird {
  fly() {
    return `flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin cant fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

//static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); //static method dont call by object

// console.log(Calculator.add(2, 4));

// Getters and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) throw new Error("Salary can't be negative");
    this._name = name;
    this.#salary = salary;
  }

  get salary() {
    return "you are not allowed to see salary";
  }

  set salary(value) {
    if (value < 0) {
      console.log("Salary must be greater than 0");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("John", 5000);
console.log(emp._salary);
