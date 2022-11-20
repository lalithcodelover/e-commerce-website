import React from "react"



const CartContext = React.createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
    token:'',
    login:(token)=>{}
}) 

export default CartContext