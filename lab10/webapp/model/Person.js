/**
 * person.js
 */

 export class Person{
    #name;
    #dateOfBirth;

    constructor(name, dateOfBirth){
        this.#name=name;
        this.#dateOfBirth=new Date(dateOfBirth);
    }

    getName(){
        return this.#name;
    }
    setName(newName){
        this.#name=newName;
    }
    getDateOfBirth(){
        return this.#dateOfBirth;
    }
    setDateOfBirth(newDate){
        this.#dateOfBirth=newDate;
    }

    toString(){
        return `{Name: ${this.getName()}, Date Of Birth: ${this.getDateOfBirth().getFullYear()}-${this.getDateOfBirth().getMonth()+1}-${this.getDateOfBirth().getDate()}}`;
    }

}

const anna = new Person("Ana Smith", new Date(1998,11,15));
console.log(anna.toString());