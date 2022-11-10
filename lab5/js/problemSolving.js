"use strict";

// Q1:
function max(x,y){
    if(x>y){
    return x;
}
    else{
        return y;
    }
    
}

console.log("Q1: "+max(1,2));

//Q2:

function maxOfThree(x,y,z){
if(x>y&&x>z){
    return x;
}
if(y>x&&y>z){
    return y;
}
else{
    return z;
}
}

console.log("Q2: "+maxOfThree(1,2,3));

//Q3:
function isVowel(a){
   
    if ('aeiuo'.includes(a)){
    return true;
    }
    else{
        return false;
    }
}

console.log("Q3: "+isVowel('d'));

//Q4 Sum:
function sum(arr){
    var count=0;
for(let i=0;i<arr.length;i++){
     count+=arr[i];
}
return count;
}

console.log("Q4 Sum: "+sum([1,2,3,4]));

//Q4: multiply
function multiply(arr){
   var pruduct=1;
   for(let i=1; i<arr.length;i++){
    pruduct=pruduct*arr[i];
   }
   return pruduct;
}


console.log("Q4 Product: "+multiply([1,2,3,4]));

//Q5:
function reverse(str){
 var word='';
 for(let i=str.length-1; i>=0;i--){
    word+=str[i];
 }
 return word;
}

console.log("Q5: "+reverse("jag testar"));


// Q6 imperative:
function findLongestWord(arr){
var max=arr[0].length;
for (let i = 1; i < arr.length; i++) {
    if(arr[i].length>max){
        max=arr[i];
    }
    return max.length;   
}
}
console.log("Q6 imperative: "+findLongestWord(["Suzi","Naodii","he"]));

//Q6: Declarative
function findLongestWord1(arr){
    return arr.reduce((x,y)=>x.length>y.length ?x:y).length;
}

console.log("Q6 declarative: "+findLongestWord1(["Suzi","Naodii","he"]));

//Q7 Imperative:
function filterLongWords(arr, i){
    const array=new Array();
    for (let index = 0; index<arr.length; index++) {
        if(arr[index].length >i){
            array.push(arr[index]);
        }     
    }
    return array;  
}

console.log("Q7 using Imperative: ");
    console.log(filterLongWords(["Suziii","Naodii","hello"],4));


//Q7 Declarative 
 function filterLongWords1(arr, i){
 return arr.filter(a=> (a.length>i));
 }

 console.log("Q7 using Declarative: ");
 console.log(filterLongWords1(["Suzi","Naodii","hello"],4));

 //Q8:
 function computeSumOfSquares(arr){
    return arr.map(a=>a*a).reduce((x,y)=>x+y);
 }

 console.log("Q8 sumOfSquares: "+computeSumOfSquares([1,2,3]));

 //Q9 Declarative: 
 function printOddNumbersOnly(arr){
    const oddNums= arr.filter(i=> {
        return i%2!==0;
    });
    return oddNums;
 }

 console.log("Q9 using Declarative: ");
 console.log(printOddNumbersOnly([1,2,3,4,6,5]));

 //Q9 Imperative:
 function printOddNumbersOnly1(arr){
    var newArr=[];
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] % 2 !== 0) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
 }
console.log("Q9 Imperative:");
 console.log(printOddNumbersOnly1([1,2,3,4,5,7]));

 //Q10 Declarative:

 function computeSumOfSquaresOfEvensOnly(arr){
    return arr.filter(x=>(x%2===0)).map(x=>x*x)
             .reduce((x,y)=>x+y);
 }

 console.log("Q10 Declarative: "+computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));


//Q11 Declarative sum
function sum1(arr){
return arr.reduce((x,y)=>x+y);
}
console.log("Q11 Sum: "+sum1([1,2,3,4]));

//Q11 Imperative multiply
function multiply1(arr){
    return arr.reduce((x,y)=>x*y);
}
console.log("Q11 Product:"+ multiply1([1,2,3,4]));

//Q12
function findSecondBiggest(arr){
    var firstMax= -Infinity;
    var secondMax= -Infinity;

    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>firstMax){
            secondMax=firstMax;
            firstMax= arr[index];
        }
        if(arr[index]!==firstMax && arr[index]>secondMax){
            secondMax= arr[index];
        }
        
    }
    return secondMax;
}

console.log("Q12: "+findSecondBiggest([1,2,3,4]));

//Q13
console.log("Q13 Fibonaccii:")
function printFibo(n, a, b){
for(let i=0; i<n; i++){
    console.log(a);
  const sum=a+b;
  a=b;
  b=sum;
}

}

printFibo(6,0,1);