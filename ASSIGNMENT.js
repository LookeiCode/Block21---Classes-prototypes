class Car {
    constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }

    getDescription() {
        return this.make + ' ' + this.model + ' ' + this.year
    }
}

class ElectricCar extends Car {
    constructor (make, model, year, range) {
        super(make, model, year)
        this.range = range
    }
    
    carRange() {
        return ` - ${this.range}`
    }
}

const car1 = new ElectricCar("Tesla", "Model S", 2019, "300 miles")

// Console log
console.log(car1)
console.log(car1.getDescription() + car1.carRange())

// Just some other console logs (tests)
// console.log(car1)
// console.log(car1.getDescription())