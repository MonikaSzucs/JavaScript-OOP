// Poly = Many
// Morph = Forms
// Polymorphism = Many Forms

// Polymorphism in Object-Oriented Programming is the ability to create a varaible, 
// a function, or an object that has more than one form

// Parent Class
class Animal {
    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name + ' eats food');
    }

    prepares(){
        console.log(this.name + ' is starting to get ready');
    }
}

// Child Class
class Alligator extends Animal{

    // If this eat function was not available here in this class then it will look for the eats function in the Animal class.
    // this functions get over written instead of the parent functions if available here in this class
    eats(){
        // this super will call the parent class method
        super.eats();
        console.log(this.name + ' eats fishes')
    }
}

let animal = new Animal('Dog')
animal.eats()

let murphy = new Alligator('Murphy');
murphy.eats();

let george = new Alligator('George');
george.prepares();