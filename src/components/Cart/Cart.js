import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Burger from "./Burger/Burger";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onCartOpen = () => {
    props.onCartOpen(true);
  };

  return ReactDOM.createPortal((
    <div className={styles["container-cart"]}>
      <header>
        <ShoppingCartIcon />
      </header>
      <div className={styles["container-cart__burgers"]}>
        { (cartCtx.burgers.length === 0) && <p className={styles['container-cart__empty']}>Your burger cart is empty !! ...</p> }
        {cartCtx.burgers.map((burger) => (
          <React.Fragment key={burger.id}>
            <Burger {...burger} burger={burger} />
            <hr />
          </React.Fragment>
        ))}
      </div>
      <span className={styles['container-cart__empty']}>Total cost: ${+cartCtx.totalAmount.toFixed(2)}</span>
      <div className={styles["container-cart__footer"]}>
        <button
          onClick={onCartOpen}
          className={styles["container-cart__cancelBut"]}
        >
          Cancel
        </button>
        <button className={styles["container-cart__orderBut"]}>ORDER</button>
      </div>
    </div>
  ),document.getElementById('cart'));
};

export default Cart;
