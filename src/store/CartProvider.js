import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [addItems,setAddItems] = useState([])
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

  const cartContext = {
    items: addItems,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
