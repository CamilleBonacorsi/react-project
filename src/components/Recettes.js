import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../App.css';
import Card from './Card.js';
import Menu from './Menu.js';

const Recettes = () => {

    const [data, setData] = useState([]);
    const [research, setResearch] = useState('');

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + research).then((res) => {
            if (res.data.meals === null) {
                setData([]);
            } else {
                setData(res.data.meals);
            }
        })
    }, [research])

    //console.log(research);

    return (

        <div id='Recettes'>

            <h1>Recettes de cuisine</h1>
            <input
                type="text"
                placeholder="Tapez le nom d'un aliment (en anglais)..."
                id='search-bar'
                onChange={(event) => setResearch(event.target.value)}
                value={research} />


            <div id='dish-cards'>
                {data.map((plat) =>
                    <Card
                        key={plat.idMeal}
                        dish={plat}
                        name={plat.strMeal}
                        origin={plat.strArea}
                        picture={plat.strMealThumb}
                        description={plat.strInstructions}>
                    </Card>
                )}
            </div>


        </div >
    );
};

export default Recettes;