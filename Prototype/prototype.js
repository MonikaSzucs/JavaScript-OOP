// In JS , every function have a property called Prototype
// by default this proeprty is empty.
// You can add properties and methods to it

// JavaScript has prototype based inheritance
// Suppose there is a function X.
// When you create another func that is inherited from X, it will inherit the methods and properties definedin X's prototype

// we are creating a constructor when we do this.
let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;
}

EmpDetails.prototype.getName = function(){
    return this.name;
}

EmpDetails.prototype.getAge = function(){
    return this.age
}

let emp1 = new EmpDetails('John', 30);
let emp2 = new EmpDetails('Peter', 40);

console.log(emp1.getName());
console.log(emp2.getAge());
