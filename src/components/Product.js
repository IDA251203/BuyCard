import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import styles from './All.module.css'
import Button from '@mui/material/Button';

const Product = ({product}) => {
    const dispatch  = useDispatch()
    
    const handleAddToCart = () =>{
        dispatch(addToCart(product))
    }
    

  return (
    <div className={styles.product}>
      <h3 >{product.name}</h3>
      <p>{product.price}$</p>
      
      <Button variant="contained" 
      onClick={handleAddToCart}
      sx={{
        backgroundColor:'purple'
      }}
      >Add</Button>
    </div> 
  )
}

export default Product;
