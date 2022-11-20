import React from "react"



const CartContext = React.createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
    token:'',
    login:(token)=>{},
    isLoggedIn:false
}) 

export default CartContext