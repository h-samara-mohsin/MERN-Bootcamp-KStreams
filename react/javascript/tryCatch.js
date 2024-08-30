// program ki execution theek rahegi aur error k case me catch chal jayega program stop nhi hoga balke try catch block k bad jo code likha wa ha wo bhi chal jayega

try{
check();  //hoisting error
}
catch(error){
    console.log(error.message);
}finally{
    console.log("any case"); //ye her soorat me chalega wwhether error aaye ya nhi
}
const check = () => {
    console.log("check error");
}  

console.log("check kr rahe hain try catch use krne k baad program ki execution is line ko print krke");