import React, { useState } from 'react';

import Appbar from './components/Appbar/Appbar';
import Container from './layout/Container/Container';
import Burgers from './components/MainHeaderBurgers/Burgers/Burgers';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
    const [ hideCart, setHideCart ] = useState(true);

    const onCartOpen = (option) => {
        setHideCart(option);
    };

    return(
        <CartProvider>
            <Appbar onCartOpen={onCartOpen} />
            <Container>
                <Burgers />
                {!hideCart && <Cart onCartOpen={onCartOpen} />}
            </Container>
        </CartProvider>
    )
};

export default App;