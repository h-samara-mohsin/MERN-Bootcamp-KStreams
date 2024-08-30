import { createContext, useState } from "react";

const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cart,setCart] = useState([])
    return <CartContext.Provider value={{cart,setCart}}>{props.children}</CartContext.Provider>
}

export  {CartContext, CartContextProvider};