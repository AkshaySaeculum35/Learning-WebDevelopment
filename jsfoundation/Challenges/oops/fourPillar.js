// task-1

class bankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }
  get balance() {
    return this._balance;
  }
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Invalid balance");
    }
    this._balance = amount;
  }
}

const account = new bankAccount(100);
// console.log(account.balance);
// console.log(account.deposit(20));
// console.log(account.balance);
// console.log(account.withdraw(40));
// console.log(account.balance);

// task-2
class Shape {
  constructor() {}
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(radius = 5) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}
class Rectangle extends Shape {
  constructor(width = 5, height = 5) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

const circle = new Circle();
console.log(circle.area());
const rect = new Rectangle();
console.log(rect.area());
