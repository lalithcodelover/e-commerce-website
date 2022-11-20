import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
const initialState =localStorage.getItem('token')
    const [addItems,setAddItems] = useState([])
    const [token,setToken] = useState(initialState)
    const addItemToCart = (item) => {

    let cartItems=[...addItems]
    let hasItem=false;
    cartItems.forEach((product)=>{
        if(product.id===item.id){
            hasItem=true;
            product.quantity=Number(product.quantity)+Number(item.quantity)
        }
    })
    if(hasItem){
        setAddItems(cartItems)
    }
    else{
        setAddItems((prevItem)=>{
            return [...prevItem,item]
        })
    }
  };
  const removeItemFromCart = (item) => {
    let cartItems = [...addItems]
    cartItems.forEach((product,index)=>{
        if(product.id===item.id){
            cartItems.splice(index,1)
            setAddItems(cartItems)
        }
    })
  };

  const loginHandler=(token)=>{
    setToken(token)
    localStorage.setItem('token',token)
  }
const userIsLoggedIn = !token
  const cartContext = {
    items: addItems,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    token:token,
    login:loginHandler,
    isLoggedIn:userIsLoggedIn

  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
