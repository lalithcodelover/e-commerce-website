import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import './AlbumList.css'

const AlbumList = (props) => {

    const cartCtx = useContext(CartContext)
 

const addToCart =(e) => {
    e.preventDefault()
    cartCtx.addItem({id:props.id,
    title:props.title,
imageUrl:props.image,
quantity:props.quantity,
price:props.price})

}

  return (
    <div className="products">
      <div >
        <h2>{props.title}</h2>;
        <img src={props.image} alt={props.title} />
        <div className="cartlist">
          <h3>${props.price}</h3>
          <button onClick={addToCart} className="button">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default AlbumList
