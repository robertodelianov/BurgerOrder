import React, { useReducer } from "react";

import CartContext from "./cart-context";

const initialState = {
  burgers: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BURGER":
      let updatedBurgers;
      let updatedAmount;
      let copyObject;

      const indexed = state.burgers.findIndex(
        (burger) => burger.id === action.payload.id
      );

      if (indexed === -1) {
        updatedBurgers = state.burgers.concat(action.payload);
        updatedAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
      } else {
        updatedBurgers = state.burgers;
        copyObject = updatedBurgers[indexed];
        copyObject.amount = action.payload.amount + 1;
        updatedAmount = state.totalAmount + action.payload.price;
      }

      return {
        burgers: updatedBurgers,
        totalAmount: updatedAmount,
      };

    case "REMOVE_BURGER":
      let copiedState;
      let copiedObject;
      let updateAmount;

      const index = state.burgers.findIndex(
        (burger) => burger.id === action.payload.id
      );

      if (action.payload.amount === 1) {
        copiedState = state.burgers;
        copiedState.splice(index, 1);
        updateAmount = state.totalAmount - action.payload.price;
      } else {
        copiedState = state.burgers;
        copiedObject = state.burgers[index];
        copiedObject.amount = action.payload.amount - 1;
        updateAmount = state.totalAmount - action.payload.price;
      }

      return {
        burgers: copiedState,
        totalAmount: updateAmount,
      };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addBurgerHandler = (burger) => {
    dispatch({ type: "ADD_BURGER", payload: burger });
  };

  const removeBurgerHandler = (burger) => {
    dispatch({ type: "REMOVE_BURGER", payload: burger });
  };

  const cartContext = {
    burgers: cartState.burgers,
    totalAmount: cartState.totalAmount,
    addBurger: addBurgerHandler,
    removeBurger: removeBurgerHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
