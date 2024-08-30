// spread is primarily used for expanding iterables like arrays into individual elements.

/* while the spread operator expands elements, the rest operator condenses them into a single entity within
within function parameters or array destructuring*/

const array = [1,2,3,4,5];

const [a,b] = array;

// I want first value in one variable and rest all values on 2nd variable \
// rest operator
const [first, ...rest] = array;
const [first_try, ...remaining] = array; 


console.log(a,b);
console.log(first,rest);
console.log(first_try,remaining);

// -------------**********-----------------

const spreadFunc =  (a,b) => {
    console.log("spread func ka result: ",a ,b);
}

spreadFunc(array);
spreadFunc(...array); 

//


const spreadFunc2 =  (a,...b) => {
    console.log("spread func ka result jb poori array ko 2 variables me store krwana ha tou; : ",a ,b);
}

spreadFunc2(array);
spreadFunc2(...array); 

// 1 array ki value ko 2 variables pe spread krna tha tou spread operator use kia
// jab 2 values ko aik variable k upper condense/concat krna tha tou rest operator use kia

// ---**** one more use-case : when we need to copy one array into another array ***---

// const arrayTwo = array;  //is sey array2 me array ka reference copy hua h not the array
// arrayTwo[2] = "value"
// console.log(array); //isne array ko modify krdia , aim ye tha jo newArray bani h usi modify krna tha , means dono array aik hi ko point kr rahi hain


const arrayThree = [...array]; // it is a deep copy , its not reference
arrayThree[2] = "value"
console.log("original array is same!: ",array);
console.log("array three! modified: ",arrayThree);
