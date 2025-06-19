// task-1

function Animal() {}

Animal.prototype.speak = function () {
  return "Animal speaking";
};

function Dog() {
  Animal.call(this);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return "Woof!";
};

const animal = new Animal();
const dog = new Dog();
console.log(dog.bark());
