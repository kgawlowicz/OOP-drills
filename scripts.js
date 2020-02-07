
// //Object Literals, Pseudo Classes and methods > Step 1 - Object Literal
// let person1 = {
//     name: 'Kennan',
    
//     greeting: function () {
//         alert(`Hello, my name is ${this.name}.` )
//     }
// }

// let person2 = {
//     name: 'Amanda',
    
//     greeting: function () {
//         alert(`Hello, my name is ${this.name}.` )
//     }
// }

// let person3 = {
//     name: 'Wendy',
    
//     greeting: function () {
//         alert(`Hello, my name is ${this.name}.` )
//     }
// }

// let person4 = {
//     name: 'Glenda',
    
//     greeting: function () {
//         alert(`Hello, my name is ${this.name}.` )
//     }
// }

// let person5 = {
//     name: 'Eleanor',
    
//     greeting: function () {
//         alert(`Hello, my name is ${this.name}.` )
//     }
// }

//console.log(person1.name);
//person1.greeting();
// console.log(person2.name);
// person2.greeting();
// console.log(person3.name);
// person3.greeting();
// console.log(person4.name);
// person4.greeting();
// console.log(person5.name);
// person5.greeting();

// //Object Literals, Pseudo Classes and methods > Step 2 - Pseudoclass
// //constructor
// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }
// //pseudoclass prototype
// Person.prototype.sayHello = function(){
//     alert('Hello, my name is ' + this.name + '! I am ' + this.age + ' years old and live in ' + this.city + '.');
// }

// let p1 = new Person('Kennan','Boston',21);
// p1.sayHello();

// let p2 = new Person('Amanda','Pasadena',18);
// p2.sayHello();

// let p3 = new Person('Wendy','Hoover',47);
// p3.sayHello();

// let p4 = new Person('Glenda','Sylacauga',75);
// p4.sayHello();

// let p5 = new Person('Eleanor','Clarence',80);
// p5.sayHello();

//Object Literals, Pseudo Classes and methods > Step 5 - ES6 syntax
// class Person {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }

//     sayHello() {
//         alert(`Hello, my name is ${this.name}! I am ${this.age} years old.`);
//     }
// }

// let p1 = new Person('Jane','Hoover',29);
// p1.sayHello();

//Inheritance > Step 1

//vehicle  can be  truck, sedan or motorcycle
class Vehicle {
    constructor(manufacturer,numOfWheels){
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }

    aboutVehicle(){
        console.log(`This is a vehicle. ${this.manufacturer} made it. And it has ${this.numOfWheels} number of wheels.`)
    }
}

class Sedan extends Vehicle {
    constructor (manufacturer, numOfWheels, size, mpg) {
        super(manufacturer, numOfWheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle(){
        console.log(`This vehicle is a sedan. ${this.manufacturer} made it. And it has ${this.numOfWheels} number of wheels.`)
    }
}

class Motorcycle extends Vehicle {
    constructor (manufacturer, numOfWheels, handlebars, noDoors) {
        super(manufacturer, numOfWheels);
        this.handlebars = handlebars;
        this.noDoors = noDoors;
    }
    aboutVehicle(){
        console.log(`This vehicle is a motorcycle. ${this.manufacturer} made it. And it has ${this.numOfWheels} number of wheels.`)
    }
}

let harley = new Motorcycle('Harley Davidson', '2', true,  true);
harley.aboutVehicle();
let camry = new Sedan('Toyota', '4','medium','25');
camry.aboutVehicle();
let momBus = new Vehicle('Chevy','4');
momBus.aboutVehicle();