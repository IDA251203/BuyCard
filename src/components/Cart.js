import React from 'react'
import { useSelector } from 'react-redux'
import styles from './All.module.css'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../redux/actions/cartActions';

const Cart = ({product}) => {
    const cartItems  = useSelector(state =>state.cart);
    const cartItemsCount = cartItems.length;
    let totalSum = 0;
    
    for (let i = 0; i < cartItemsCount; i++) {
        totalSum += parseFloat(cartItems[i].price); 
    }
    console.log(totalSum)

        ///////////
    const dispatch  = useDispatch()
    
    const handleDeleteToCart = () =>{
        dispatch(deleteCart(product))
    }

  return (
   <>
    <h2>Shopping Cart</h2>
    <h3>Total Price: {totalSum}$</h3>
    <div className={styles.product__cont}>
      {cartItems.map(item => (
        <div key={item.id} className={styles.buyproduct}>
            <div className={styles.buyproduct__card}>
              <p>{item.name}</p>
              <p>{item.price}$</p>
            </div>
            <div className={styles.buyproduct__card}>
              <Button variant="outlined" onClick={handleDeleteToCart}>
                Delete
              </Button>
            </div>
        </div>
      ))}
     
    </div>
   </>
  )
}

export default Cart
