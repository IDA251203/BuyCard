import styles from "./All.module.css"
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Shop from "./productShop";
import Cart from "./Cart";
import NoPage from "./Nopage";


const Navbar = () =>{
    return(
        <div className={styles.nav}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Shop/>} />
                        <Route path="basket" element={<Cart/>} />
                        <Route path="*" element={<NoPage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navbar