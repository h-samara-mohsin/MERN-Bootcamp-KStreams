
// iteraable items k lye use hote hain

const array = [2,4,6,8,10];

// arrow function ya tou call back k lye use hoti ya kisi specific func k lye , yahan pe func anonymous ha

array.forEach( (item , index ,arr) => {
    arr[index] = item -1;
    console.log(item,index,arr)
})
console.log(array) //original arraay modify hogai coz 3rd argument original array return krta ha aur usme changes apply krdeta ha jo hamne forEach loop me ki hain
// foreach((item, index, arr)=> {})
//  item her element of array pe iterate krega , index batata ha k current item array k kis index pe h , arr jo 3rd argument ha wo array return krta ha 
  

// ----------********map**********----------------

array.map( (item , index ,arr) => {
    arr[index] = item -2;
    console.log(item,index,arr)
})
console.log(array) //original arraay modify hogai 

// Difference in between map and forEach
// map return krwa sakte hain changed array forEach me nhi krsakte (foreach)
// the main difference between map and forEach is that map returns a new array with the results of the function, while forEach does not return anything and only modifies the original array

const arrray = array.map( (item , index ,arr) => {
    item -1;
    return item
})
console.log("original array:  ",array)
console.log("we can return array in map: ",arrray)

// forEach is a method that executes a provided function once for each element in an array. It does not return a new array, but instead modifies the original array.
const arrray2 = array.forEach( (item , index ,arr) => {
    item -1;
    return item
})

console.log("we can't return array in forEach: ",arrray2)