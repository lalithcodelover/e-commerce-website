import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AlbumList from "./components/AlbumList";
import About from "./pages/about";
import Home from "./pages/Home";
const productsArr = [
  {
    id: "a1",
    title: "Album1",
    price: 100,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "a2",
    title: "Album2",
    price: 50,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "a3",
    title: "Album3",
    price: 70,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "a4",
    title: "Album4",
    price: 100,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [cart, setCart] = useState(false);
  const productList = productsArr.map((product) => {
    return (
      <AlbumList
        id={product.id}
        title={product.title}
        image={product.imageUrl}
        price={product.price}
        quantity={product.quantity}
      />
    );
  });

  const openCartHandler = () => {
    setCart(true);
  };

  const closeCartHandller = () => {
    setCart(false);
  };

  return (
    <CartProvider>

      <Route path="/store">
        {cart && <Cart onClose={closeCartHandller} />}
        <Header onShow={openCartHandler} />
        <div className="title">
          <h1>The Generics</h1>
        </div>
        <h1 className="category">Music</h1>
        <main>{productList}</main>
      </Route>

      <Route path="/about">
        <Header></Header>
        <div className="title">
          <h1>The Generics</h1>
        </div>
        <About/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
    </CartProvider>
  );
}

export default App;
