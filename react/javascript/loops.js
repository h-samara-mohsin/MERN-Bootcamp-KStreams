// counter loop

// for (let a=0; a<20; a++){
//     console.log(a);
// }

// conditional operator
// to avoid infinite loop index ++ add kia
let index = 0;

// while (index < 20) {
//     console.log(index);
//     index++;
// }

// while (index %2 ==0 ) {
//     console.log(index);
//     index++;
// }

// continue statement
console.log("Continue Statement: ");
// for (let a=0; a<20;) {
//     console.log(a);
//     // continue; 
//      //continue ka matlab ha aaage jo bhi code ha usko ignore kro loop dubara chalado 
//     // console.log(a);
// }

// Nested loop
console.log("*************Nested loop**************")
for (let a=0; a<5; a++){
    for (let b=0; b<5; b++){
        console.log(a,b);
    }
}