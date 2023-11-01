/* 
    - Employees
        - Manager
            - create tables
        - Host
            - set tables
        - Server
            - serve tables

        Employee number

    - Table
*/

const employeeNumbers = [];

class Employee {

    static setEmployee(role,name,payRate) {
        // Create a random employee number
        const setEmployeeNumber = Math.floor(Math.random()*(100 - 1) + 1);
        let numberToUse;
        
        if(employeeNumbers.includes(setEmployeeNumber)) {
            let tempNumber = setEmployeeNumber + "a";
            employeeNumbers.push(tempNumber);
            numberToUse = tempNumber;
        } else {
            employeeNumbers.push(setEmployeeNumber);
            numberToUse = setEmployeeNumber;
        }

        // Set Hire Date
        let today = new Date();

        // Set Role
        const usedClass = role; // designates the class to target.

        return new usedClass(name,numberToUse,today,payRate);
    }

    constructor(name, empNumber, date, payRate) {
        this.name = name;
        this.employee_number = empNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2));
    }

    //* Challenge Write a method that allows to change their hire date.
}

class Manager extends Employee {
    
    constructor(name,employee_number,dateHired,payRate) {
        super(name,employee_number,dateHired,payRate);
        this.role = 'Manager';
    }

    createTable(number,seats) {
        let table = new Table(number, seats);
        //* Challenge: How can we evaluate if a table number already exists?
        return table;
    }
}

class Server extends Employee {
    
    constructor(name,employee_number,dateHired,payRate) {
        super(name,employee_number,dateHired,payRate);
        this.role = 'Server';
    }

    serveTable(table) {
        table.updateStatus('eating...');
    }
}

class Host extends Employee {
    
    constructor(name,employee_number,dateHired,payRate) {
        super(name,employee_number,dateHired,payRate);
        this.role = 'Host';
    }

    setTable(table) {
        table.updateSeating();
    }
}


// const employee = new Employee('Joe',1,new Date(),18);
const manager = Employee.setEmployee(Manager,'Jane',18);
const server = Employee.setEmployee(Server,'Bob',18);
const host = Employee.setEmployee(Host,'Jack',18);
console.log(manager, server, host);

// Tables have 
class Table {
    constructor(tableNumber,seatNumber) {
        this.tableNumber = tableNumber;
        this.seatNumber = seatNumber;
        this.seated = false;
        this.status = 'empty';
    }

    updateSeating() {
        if(this.seated) {
            this.seated = false;
            this.status = "empty"
        } else {
            this.seated = true;
            this.status = "waiting..."
        }
    }

    updateStatus(status) {
        if(status !== undefined) {
            this.status = status;
        } else {
            this.status = 'waiting...';
        }
    }
}

const table10 = manager.createTable(10,2);
host.setTable(table10);
console.log(table10);
server.serveTable(table10);
// table.updateStatus('eating...');
console.log(table10);