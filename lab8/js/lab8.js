// lab8.js
"use strict";

   // 6
const count = function(){
    let counter = 0; 
    function add(){
    counter+=1;
    }

    function reset(){
    counter = 0;
    }

    return{
    add: function(){
    add();
    },
    reset: function(){
    reset();
    },
    value: function(){
    return counter;
    }
    }
    }
    
     let counts = count();
      counts.add();
      counts.add();
     console.log(counts.value());
     counts.reset();
     console.log(counts.value());

     /*
     const count=(function(){
      let counter=0;
      function add(){
         counter+=0;
      }
      function reset(){
         counter = 0;
      }
      return{
         value: counter,
         add:add,
         reset: reset
      }
     })();
     */

     /*
     const count={
      counter=0;
      reset: function(){
         this.counter=0;
      },
      add: function(){
         this.counter+=1;
      }
     };
     count.add();
     console.log(count.counter);
     */


     //7
     /*Free avariables are variables that are neither locally declared nor passed as parameter.
      *let counter is a free variable in the definition of add() 
     */

     // 8
        (function(){
             let counter = 0;
             function make_adder(inc){
               counter+=inc;
             }
             function reset(){
                counter=0;
             }
             function value(){
                return counter;
             }
             make_adder(5);
             make_adder(5);
             console.log("if inc is 5 counter: "+counter);
             reset();
             make_adder(7);
             make_adder(7);
             console.log("if inc is 7 counter: "+ counter);
         })();

         /*
         let make_adder=(function(inc){
            let counter=0;
            return function(){
               return (counter+=inc);
            }
         })
         let add5= make_adder(5);
         add5();
         add5();
         console.log(add5());
         
         */

        
         

    //9 
    /* The "Module Pattern" can remove all the names from the Global namespace. 
     * Because Module Pattern can help to avoid declaring global variables/functions.
     * e.g. (function(params) {
              statements; 
              }(params));
    */

// 10

const Employee = (function(){
    let name;
    let age;
    let salary;
    
    
    const getAge = function(){
    return age;
    };
    const getSalary = function(){
    return salary;
    };
    const getName = function(){
    return name;
    };
    const setAge = function(newAge){
    age = newAge;
    };
    const setSalary = function(newSalary){
    salary = newSalary;
    };
    const setName = function(newName){
    name = newName;
    };
    const increaseSalary = function(percentage){
    salary = getSalary () + getSalary()*percentage/100;
    };
    const incrementAge = function(){
    age = getAge() + 1;
    };
    return{
    setAge: setAge,
    setSalary: setSalary,
    setName: setName,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge
    };
    })();

    /*
    */
  
    // 11
Employee.setAddress = function(newAddress){
    address = newAddress;
    }
    Employee.getAddress = function(){
    return address;
    }

    /*
    Employee.address={street:"", city:"", state:"", zip:""};
    Employee.setAddress=function(street, city, state, zip){
      this.address={
         street: street,
         city:city,
         state:state,
         zip:zip,
      }
    }

    Employee.getAddress=function(){
      return this.address;
    }
    */