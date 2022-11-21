import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";

import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const removeItemHandler = (product) => {
    cartCtx.removeItem(product);
  };

  // const cartList = cartCtx.items.map((product) => {
  const email = authCtx.emailid;
  fetch(
    `https://crudcrud.com/api/d6306945df944bdc82c0ff79d2b72b05/cart${email}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      cartCtx.crudlist(data);
    });

  const crudList = cartCtx.cruditems.map((product) => {
    return (
      <div className="cartitems">
        <span className="cart-col">
          <img src={product.imageUrl} alt={product.title} width="100px" />
          <span>{product.title}</span>
        </span>
        <span className="cart-col">
          <span>${product.price}</span>
        </span>
        <span className="cart-col">
          <span>Quantity:{product.quantity}</span>
          <button
            className="remove-item"
            onClick={() => removeItemHandler(product)}
          >
            Remove
          </button>
        </span>
      </div>
    );
  });
  let Total = 0;
  cartCtx.items.forEach((product) => {
    Total += Number(product.price * product.quantity);
  });

  return (
    <div className="cartbox">
      <button className="close-cart" onClick={props.onClose}>
        X
      </button>
      <div className="headings">
        <div>ITEM</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
      </div>
      <div className="cartdetails">{crudList}</div>;
      <div className="total-price">Total: ${Total}</div>
    </div>
  );
};

export default Cart;
