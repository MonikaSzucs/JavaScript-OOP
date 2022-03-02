// Encapsulation
// A mechnaism of restricting direct access to some of teh object's components
// A mechanism of bundling data with methods that operate on that data

// Why Encapsulation
// Security - Controlled access
// Hide Implementation adn Expose Behaviour
// Loose Coupling - Modify the implementation anytime

class Employee{
    setEmpDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName(){
        return this.name
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNo(){
        return this.phoneNo;
    }
}

let emp1 = new Employee();
emp1.setEmpDetails('John', 1001, 123123456);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());

