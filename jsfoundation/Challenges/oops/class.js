class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `This vehicle is a ${this.make} ${this.model}.`;
  }
  move() {
    console.log("The vehicle is moving");
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Vroom! The car is started.";
  }
  move() {
    console.log("The car is driving"); // override the move method
  }
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.getDetails());

console.log(Vehicle.isVehicle(myCar));
