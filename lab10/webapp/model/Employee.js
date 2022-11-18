/**
 * employee.js
 */

import { Person } from "./Person.js";

export class Employee extends Person{
    #salary;
    #hireDate;

    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.#salary=salary;
        this.#hireDate=hireDate;
    }

    getSalary(){
        return this.#salary;
    }
    setSalary(newSalary){
        this.#salary=newSalary;
    }

    doJob(jobTitle){
      console.log( `${this.getName()} is a ${jobTitle} who earns $${ new Intl.NumberFormat().format(this.getSalary())}`);
    }
}

const emplo= new Employee("Anna", new Date(1955,3,25), 249995.50, new Date(2000,11,3));
emplo.doJob("Programmer");
