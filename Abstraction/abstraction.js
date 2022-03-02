function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    // we use the variable let so that we cannot access the varaible outside the scope. This means no one has access to this
    let monthlyBonus = 1000;

    // we also want to make sure no one can get access to this function
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is: ' + finalSalary);
    }

    this.getEmpDetails = function(){
        console.log('Name: ' + this.name + ' | Age: ' + this.age + ' | BaseSalary: ' + this.baseSalary);
        calculateFinalSalary();
    }
}

// Abstraction
// An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
// Abstraction hides certain details and only show the essential features of teh object
// This approach improves understandability as well as maintainability of the code

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();