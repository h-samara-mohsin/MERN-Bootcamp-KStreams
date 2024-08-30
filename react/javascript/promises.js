// promises apko promise krte hain k wo apko koi state return krenge

// 1 promise ki diff states hoti hain ya tou wo execute horaha hota ha , jb tk wo execute horaha hota ha tou wo uski pending state hoti h
// fulfilled state: ya tou promise resolve(successfully executed) hoga ya reject(promise rejected error pop)

// const promise1 = new Promise((resolve, reject) => {
//     const a =2;
//     if (a%2 == 0) {
//         setTimeout(() => {
//         resolve("a is even");
//         },3000)
//     }
//     else {
//         reject("a is odd");
//     }
// })

// promise1.then((resolve) => {
//     console.log(resolve);
// })
// .catch((reject) =>{
//     console.log(reject);
// })

// console.log(promise1)

// ___________*********________________
// its not necessary k her dafa rejected part bhi add kren hum promise me

const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("promise 2");
        },3000)
})

const promise3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    resolve("promise 3");
    // },3000)
})

const main = async() => {
    await promise2.then((resolve) => {
        console.log(resolve);
    })
    
    await promise3.then((resolve) => {
        console.log(resolve);
    })
}
 main()

// is tarah program ka flow kharab hogaya pehle promise3 print hua ha phir promise2 q k promise 2 me 3 sec ka delay tha 
// program flow
/*ab agr hame apne program me is cheez ko make sure krna ha k jb tk promise2 na aajye promise3 wait krey uska tou uske lye use krte hain 
 await ka keyword use krte hain await use krne k lye function ko async banana zaroori h */
//  await sirf promises k lye hai normal functions k lye nhi hn agr hum func ko async k sath use kren tou phir wo promise banjayega