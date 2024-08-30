
const person = {
    name: "person 1",
    gender : "M",
    course: {
        name: "MERN",
        code : "MR-123",
    },
    array : [1,"one"]
}

// Adding new key to the object:
// if we add the existing key again its value will be updated

// person["name"] = "person 2"
person["array2"] = ['two',2];

(person.other_courses ={
    name:"communication",
    code: "CM-101",
})

console.log(person);
// console.log("object.key:  ",person.name)
// console.log("object.key.key:  ",person.course.name)
// console.log("object.arr[index]:  ",person.array[1])


// keys,values, entries
console.log("to print the keys in object: ",Object.keys(person));
console.log("to print the values in object: ",Object.values(person));
console.log("to print the entries in object (entries are key value pairs): ",Object.entries(person));


// De-structuring
