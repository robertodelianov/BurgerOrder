import React from 'react';

import styles from './Burger.module.css';
import Form from './Form/Form';

const Burger = (props) => {
    return(
        <div className={styles['container-burger']} >
            <h2>{props.title}</h2>
            <p>{props.describe}</p>
            <h1>$ {props.price}</h1>
            <Form burger={props.burger}/>
        </div>
    )
};

export default Burger;