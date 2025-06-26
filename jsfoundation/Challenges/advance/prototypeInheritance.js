// task-1

function Animal() {}
Animal.prototype.makeSound = function () {
  console.log("Animal makes a sound");
};

function Dog() {
  Animal.call(this);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Dog barks");
};

// const myDog = new Dog();
// myDog.makeSound(); // Animal makes a sound
// myDog.bark(); // Dog barks

// task-2

function Shape(color) {
  this.color = color;
}
Shape.prototype.getColor = function () {
  return this.color;
};

function Rectangle(width, height, color) {
  this.width = width;
  this.height = height;
  this.color = color;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const rectangle = new Rectangle(10, 20, "blue");
console.log(rectangle.getColor()); // red
console.log(rectangle.getArea()); // 200
