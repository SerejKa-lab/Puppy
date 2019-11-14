import React from 'react';
import './App.css';

const Item = ( { active, increaseCounter } ) => {
    let className = active ? 'item active' : 'item';
    return(
        <div className = { className } onClick = { increaseCounter } >
        </div>
    )
}

export default Item;