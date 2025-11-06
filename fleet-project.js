class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance) {
        this.mileage += distance;
        console.log(
            `The ${this.make} ${this.model} has been driven for ${distance} miles. Total mileage is now ${this.mileage} miles.`
        );
    }

    // return year, make, model, type, mileage
    getInfo() {
        return `${this.year} ${this.make} ${this.model} (${this.type}), Mileage: ${this.mileage} miles`;
    }
}

let suv = new Vehicle('suv', 'Jeep', 'Compass', 2020);
let truck = new Vehicle('truck', 'Ford', 'F-150', 2019);
let sedan = new Vehicle('sedan', 'Toyota', 'Camry', 2021);

suv.drive(150);
truck.drive(200);
sedan.drive(100);

console.log(suv.getInfo());
console.log(truck.getInfo());
console.log(sedan.getInfo());