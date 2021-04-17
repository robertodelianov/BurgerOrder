import React, { useContext, useRef, useState } from "react";
import AddIcon from "@material-ui/icons/Add";

import styles from "./Form.module.css";
import CartContext from "../../../../store/cart-context";

const answerIfBurgerExist = <p>The Burger is already in your cart</p>;

const Form = (props) => {
  const cartCtx = useContext(CartContext);
  const enteredInputRef = useRef();
  const [isBurgerExist, setIsBurgerExist] = useState(false);

  const onBurgerExist = () => {
    setTimeout(() => {
      setIsBurgerExist(false);
    }, 2000);
    return answerIfBurgerExist;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = cartCtx.burgers.findIndex(
      (burger) => burger.id === props.burger.id
    );
    if (index === -1) {
      const amount = enteredInputRef.current.value;

      cartCtx.addBurger({
        ...props.burger,
        amount: +amount,
      });
    } else {
      setIsBurgerExist(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles["container-form"]}>
      <label htmlFor="amount">Amount: </label>
      <input
        ref={enteredInputRef}
        type="number"
        min="1"
        max="5"
        step="1"
        name="amount"
        defaultValue="1"
      />
      {isBurgerExist && onBurgerExist()}
      <button>
        <AddIcon />
        ADD
      </button>
    </form>
  );
};

export default Form;
