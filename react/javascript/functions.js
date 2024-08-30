// Parameter vs arguments

factorial ("arg1","arg2")       //hoisting ; function calling before declaration can be done in function declaration but can't be done function expression
function factorial (param1, param2) {
    console.log(param1);
    console.log(param2);

}

// Function declaration vs function expression
   
// function expression
// pallindrome("arg1","arg")
const pallindrome = function(param1, param2) {
    console.log(param1);
    console.log(param2);

}
pallindrome("arg1","arg")


// Arrow function , anonymous function , IIFE

 const evenOdd = (param1, param2) => {
    console.log(param1);
    console.log(param2);
 }

 evenOdd("value1","value2")

// Default parameters

const evenOdd2= (param1 =2, param2=3) => {
    console.log(param1);
    console.log(param2);
 }

 evenOdd2()
 evenOdd2(222,333)

 const evenOdd3= (param1, param2) => {
    console.log(param1);
    console.log(param2);
 }

 evenOdd3()
// error 
 

// pass by copy
// const copy = (param) => {
//     console.log(param)
//     param=3
// }
// let param =1;
// copy(param)

// pass by reference
const copy = (param) => {
    console.log(param)
    param(3)
}

let param = 1;;

const updateParam = (newValue) => {
    param = newValue
}   

copy(updateParam)
console.log(param)

// Higher-order function 
// copy is higher order function q k uske parameter me aik function pass hua ha
