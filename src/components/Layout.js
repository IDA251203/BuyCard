import { Outlet, Link } from "react-router-dom";
import styles from './All.module.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Layout = () => {
    
    const cartItems  = useSelector(state =>state.cart);
    const cartItemsCount = cartItems.length;

    return (
      <div className={styles.layout}>
        <div className={styles.layout__cont}>
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head><div className={styles.nav}>
            <div>
              <Link to="/" className={styles.nav__link}>Home</Link>
            </div>
            <div>
              <Link to="/basket" className={styles.nav__link}>
              <span class="material-symbols-outlined">shopping_cart_checkout</span>
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartItemsCount} color="secondary">
                    <span class="material-symbols-outlined">shopping_cart_checkout</span>
                </StyledBadge>
                </IconButton>
              </Link>
            </div>
        </div>
  
        <Outlet />
        </div>
      </div>
    )
  };
  
  export default Layout;