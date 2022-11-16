import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]
const Cart = (props) => {
    const cartList = cartElements.map((product)=>{
        return (
            <div className={classes.cartlist}>
        <div >
            <p>{product.title}</p>
            <img src={product.imageUrl} alt={product.title} width='100px'/>
            <p>Quantity:{product.quantity}</p>
            <p>{product.price}</p>
        </div>
        <div>
            <button>Remove</button>
        </div>
        </div>
        )
    }) 
  return (
    <Modal onClose={props.onClose}>
{cartList}
</Modal>
  )
}

export default Cart
