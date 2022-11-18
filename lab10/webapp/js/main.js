/**
 * main.js
 */
import { Person } from "../model/Person.js";
import { Employee } from "../model/Employee.js";

const persons= [
    
    new Person("Bob Jone", new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,8,24))
];


persons.forEach(a=>console.log(a.toString()));

const emp= new Employee("Jim Hanson", new Date(1980,3,12), 2499999.50, new Date(2019,3,5));
emp.setSalary(245990.00);
emp.doJob("SoftWare Engineer");


