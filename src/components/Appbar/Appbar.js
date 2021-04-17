import React from 'react';

import styles from './Appbar.module.css';
import CartButton from '../UI/CartButton/CartButton';

const Appbar = (props) => {
    return(
        <div className={styles['appbar-container']}>
            <h1>Burger<span>Order</span></h1>
            <CartButton onCartOpen={props.onCartOpen} />
        </div>
    )
};

export default Appbar;