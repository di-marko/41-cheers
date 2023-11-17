import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./DrinksList.css"

const DrinksList = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(response => response.json())
            .then(data => {
                setDrinks(data.drinks);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="drinks-container">
            {drinks.map(drink => (
                <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink} style={{ textDecoration: 'none' }}>
                    <div className="drink-card">
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                        <div className="drink-name">{drink.strDrink}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default DrinksList;
