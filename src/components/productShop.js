import React from 'react';
import { useState } from 'react';
import Product from './Product';
import { useEffect } from 'react';
import styles from './All.module.css'

function Shop() {
  const [products, setData] = useState([]);
  const apiUrl = 'http://localhost:4000/products'; 

useEffect(() => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);

  return (
    <div >
      <h1>Products</h1>
      <div className={styles.product__cont}>
      {products.map(product => (
             <Product key={product.id} product={product} /> 
           ))} 
      </div>
    </div>
  );
}

export default Shop;
