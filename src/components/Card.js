import React from 'react';
import style from '../App.css';

const Card = (dish) => {
    return (
        <div id='div-card'>
            <h2 id='h2-dish-name'>{dish.name}</h2>
            <p>Origin : {dish.origin}</p>
            <img src={dish.picture} alt="fcvghbjn" />
            <div id='div-description'>
                <p>
                    {dish.description}
                </p>
            </div>
        </div>
    );
};

export default Card;