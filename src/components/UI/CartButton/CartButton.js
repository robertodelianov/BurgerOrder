import React, { useContext } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import styles from './CartButton.module.css';
import CartContext from '../../../store/cart-context';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.burgers.reduce((curNum, burger) => {
    return curNum + burger.amount;
  }, 0);

  const onCartOpen = () => {
    props.onCartOpen(false);
  }

  return (
    <button className={styles['cart-button']} onClick={onCartOpen}>
      <AddShoppingCartIcon size='large' /> Your cart <span>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
