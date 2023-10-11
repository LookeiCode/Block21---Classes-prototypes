// CLASSES & OOP (Object Oriented Programming)

// We define a class which acts as a blueprint. We can use this class to make multiple objects super easily because, again, it's just a blueprint.

// The class name - we use it to call the constructor function, THEN fill in the arguments later (assigning values) to create a new animal object
// We are defining the keys here.
class Animal {
    constructor (name, species) {
        this.name = name
        this.species = species
    }
}

// Creating/instantiating a new object with our "Animal" class
// We are assigning the values here.

const animal1 = new Animal("Dog", "Mammal")
const animal2 = new Animal("Cat", "Mammal")
const animal3 = new Animal("Bee", "Insect")
const animal4 = new Animal("Eagle", "Bird")

// We created some variables and assigned objects to them CREATED WITH our animal class/constructor.
// Again, Our Animal class is just a blueprint. It's an animal object constructor by our design.
// We can make whatever kind of classes/constructors we want. We just made an Animal one here.

console.log(animal1)
console.log(animal2)
console.log(animal3)
console.log(animal4)

console.log(typeof animal1);

// See the console logs.
// It returns an object with key/value pairs.
// We defined the keys in the constructor, then assigned the values when we made the variables.

// EXTENDS & METHODS EXAMPLE

class Vehicle {
    constructor (make, model) {
        this.make = make
        this.model = model
    }
    // We define a method here that the Vehicle class can use (Vehicle.start())
    start() {
    // We use some string literals here - so whatever value we assign to make/model will show her as (example  - Tesla Model Y is starting)
        console.log(`${this.make} ${this.model} is starting`)
    }
}

// We create another class called "Car", which extends from the "Vehicle" class. This makes Car a child of Vehicle.
// When we instantiate the car class it can inherit the properties and methods of "Vehicle", it's parent class

class Car extends Vehicle {

    constructor (make, model, year) {
        // the "super" function is used to tell the parent class "hey I want these arguments, and I'm also going to add something else" which in this case we're adding "year"
        // you use super to reference whatever is already pre-existing (make/year in this case) THEN add whatever new thing you want as you normally would afterwards
        super(make, model)
        this.year = year
    }
    // adding a new method that will be unique to the car class
    drive() {
        console.log(`${this.make} ${this.model} is driving`)
    }
}

// creating a variable with the Car class
const tesla = new Car("Tesla", "Model Y", 2023)

// Console log examples
// Just shows the tesla object we created
console.log(tesla)
// We call the start method from the Vehicle class. Even though the "tesla" variable/object is created from the "Car" class, we can use the Vehicle method "start" because we inherited it's methods/properties when we used "extends" so it basically just connected them
console.log(tesla.start())
// We call the drive method from the Car class
console.log(tesla.drive())

// Since the methods are essentially functions make sure you INVOKE them to make it work.

// EXTRA TAKEAWAYS : Either you use classes, or you use functions. Not both.
// So you either do functional programming or OOP.

// Make sure NOT to name your methods the same name as your arguments
/*
EXAMPLE:
class ElectricCar extends Car {
    constructor (make, model, year, range) {
        super(make, model, year)
        this.range = range
    }
    
    range() {
        return this.range
    }
}

we have a "range" method and also a "range" argument - this is not good.
change the method name or change the argument name
*/