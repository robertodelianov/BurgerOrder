import React from "react";

const CartContext = React.createContext({
  burgers: [],
  totalAmount: 0,
  addBurger: () => {},
  removeBurger: () => {},
});

export default CartContext;
