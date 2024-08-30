import { createContext, useState } from "react";

const UserContext= createContext()

const UserContextProvider = (props) => {
    const [userDetails, setUserDetails] = useState({
        name : "",
        email: "",
        isLoggedIn: false,
    })
    return <UserContext.Provider value={{userDetails,setUserDetails}}
    >
        {props.children} 
    </UserContext.Provider>;
}

export {UserContext, UserContextProvider};