// Arrays in javascript are dynamic irrespective of other languages

// push
// appends new element ti the end of array and returns new length of the array

// pop 
// remove the last element from an array and return it

// shift
// remove the first element from an array and return it

// unshift
// Inserts new elements at the start of an array and returns the new length of the array

// indexOf 
// Returns the index of the first occurrence of a value in an array or -1 if it is not present 

// includes
// determines whether an array includes a certain element , returning true or false as appropriate


const arr = [1,"one", true]

for (let i = 0;i<arr.length ; i++){
    console.log(arr[i])
}

// slice , splice , reverse , concat , sort , join
// filter reduce find flat

// foreach
// Destructuring
// destructuring means aap array ki kuch values variables ko assign krna chahte hain without mentioning their indexes [] are used for it

const valueOfEntireArray = arr
console.log("valueOfEntireArray : ",valueOfEntireArray)

const [val1, val2] = arr
console.log("This is destructuring","val1, val2: ",val1,val2)

const [val11, val12,val13,val14] = arr
console.log("This is destructuring ex if something not exists and we have destructured it: ","val1, val2: ",val11,val12,val13,val14)

console.log(arr.indexOf(1))
console.log(arr.indexOf(true))


