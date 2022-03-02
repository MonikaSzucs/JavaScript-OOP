// Process where one calss acquires properties (methods and fields) from another class.
// Where this information is being inherited is called a: 

// Parent Class => child class
// Super        => sub class
// Base Class   => derived class

// Parent Class
class Car{
    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for ' + this.name);
    }

    stopEngine(){
        console.log('Engine stopped for ' + this.name);
    }
}

// extends is what we use for inheritance
// Child Class
class Toyota extends Car{
    topSpeed(speed){
        console.log('Top speed for ' + this.name + ' is ' + speed);
    }
}

let myCar = new Toyota();
myCar.setName('Camry');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);