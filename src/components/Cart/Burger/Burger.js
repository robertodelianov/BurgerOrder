import React, { useContext, useState } from "react";

import styles from "./Burger.module.css";
import CartContext from "../../../store/cart-context";

const Burger = (props) => {
  const cartCtx = useContext(CartContext);
  const [isValidAmount, setIsValidAmount] = useState(true);

  const stackedPrice = props.amount * props.price;

  const onRemoveBurger = () => {
    cartCtx.removeBurger({
      ...props.burger,
    });
  };

  const onAddBurger = () => {
    if (props.amount < 5) {
      cartCtx.addBurger({
        ...props.burger,
      });
    } else {
      setIsValidAmount(false);
      setTimeout(() => {
        setIsValidAmount(true);
      }, 1500);
    }
  };

  return (
    <div className={styles["container-burger__inCart"]}>
      <h2>{props.title}</h2>
      <p>{props.describe}</p>
      <h1>$ {stackedPrice.toFixed(2)}</h1>
      <span>Amount: {props.amount}</span>
      <button onClick={onRemoveBurger}>-</button>
      <button onClick={onAddBurger}>+</button>
      {!isValidAmount && <p>Please, enter a valid amount (1-5) !</p>}
    </div>
  );
};

export default Burger;
