import React from 'react';

import styles from './Burgers.module.css';
import { BurgersStorage } from '../../../BurgersStorage/Burgers';
import Burger from '../Burger/Burger';

const Burgers = () => {
    const mappedBurgers = BurgersStorage.map( (burger) => <Burger key={burger.id} {...burger} burger={burger} /> )

    return(
        <div className={styles['container-burgers']}>
            {mappedBurgers}
        </div>
    )
};

export default Burgers;