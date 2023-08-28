import React from 'react'
import { useSelector } from 'react-redux'
import styles from './All.module.css'
import CartMap from './CartMap';

const Cart = () => {
    const cartItems  = useSelector(state =>state.cart);
    const cartItemsCount = cartItems.length;
    let totalSum = 0;
    
    for (let i = 0; i < cartItemsCount; i++) {
        totalSum += parseFloat(cartItems[i].price); 
    }
    console.log(totalSum)


  return (
   <>
    <h2>Shopping Cart</h2>
    <h3>Total Price: {totalSum}$</h3>
    <div className={styles.product__cont}>
      {cartItems.map(product => (
        <CartMap key={product.id} product={product}/>
      ))}
     
    </div>
   </>
  )
}

export default Cart
