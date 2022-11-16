import "./App.css";
import Header from "./components/Header";
import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [cart,setCart] = useState(false)
  const productList = productsArr.map((product) => {
    return (
      <div className="products">
        <h2>{product.title}</h2>;
        <img src={product.imageUrl} alt={product.title} />
        <div className="cart">
          <h3>${product.price}</h3>
          <button className="button">ADD TO CART</button>
        </div>
      </div>
    );
  });

  const openCartHandler =()=> {
    setCart(true)
  }

  const closeCartHandller =()=> {
    setCart(false)
  }

  return (
    <Fragment>
      {cart && <Cart onClose={closeCartHandller}/>}
      <Header onShow={openCartHandler} />
      <div className="title">
        <h1>The Generics</h1>
      </div>
      <h1 className='category'>Music</h1>
      <main>{productList}</main>
    </Fragment>
  );
}

export default App;
