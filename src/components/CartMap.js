import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCart } from '../redux/actions/cartActions';
import styles from './All.module.css'
import Button from '@mui/material/Button';

const CartMap = ({product}) => {
    const dispatch  = useDispatch()
    
    const handleDeleteToCart = () =>{
        dispatch(deleteCart(product))
    }
    

  return (
        <div key={product.id} className={styles.buyproduct}>
            <div className={styles.buyproduct__card}>
              <p>{product.name}</p>
              <p>{product.price}$</p>
            </div>
            <div className={styles.buyproduct__card}>
              <Button variant="outlined" onClick={()=>handleDeleteToCart(product.id)}>
                Delete
              </Button>
            </div>
        </div>
  )
}

export default CartMap;
