import { createContext, useState } from "react";


const UserContext = createContext()

// UserContextProvider hamara apna banaya wa hi component ha uska name ham kuch bhi rakh sakte hain
// BrowserRouter bhi aik tarah se provider ka kam krta ha islhum apni app ko browserRouter me wrap krte hain


const UserContextProvider = (props) => {
    const [userDetails, setUserDetails] = useState(
        {
          name:"", 
          course: "",
          email : "",
          isLoggedIn: false,
        });
    
    return <UserContext.Provider 
    value={{userDetails,setUserDetails}}>
        {props.children}
    </UserContext.Provider>
}

export {UserContext, UserContextProvider} ;