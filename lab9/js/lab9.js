// lab9.js
"use strict";

//1
const person = {
    name: "",
    dateOfBirth: "",
    getName: function () {
        return this.name;
    },

    setName: function (newName) {
        this.name = newName;
    },

};

const jhon = Object.create(person,{
    name:{
        value:"Jhon"
    },
    dateOfBirth:{
        value:"1998-12-10"
    }
});

console.log(`The person’s name is ${jhon.getName()}\nJohn was born on ${jhon.dateOfBirth} `);


//2
const employee= Object.create(person,{
    salary:{
        value:0
    },
    hireDate:{
        value: new Date()
    }
});

employee.doJob= function(jobTitle){
    console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
}

const anna= Object.create(employee,{
    name:{
        value:"Anna"
    },
    salary:{
        value:249995.50
    }
});

anna.doJob("Programmer");


//3
function Person(name, dateOfBirth){
    this.name=name;
    this.dateOfBirth=dateOfBirth;

    this.setName=function(name){
        this.name=newName;
    }

    this.getName=function(){
        return this.name;
    }

    this.toString= function(){
        return `{Name: ${this.name}, Date Of Birth: ${this.dateOfBirth}}`;
    }
}

const peter= new Person("Peter", new Date(1998-12-10));
console.log(peter.toString());







