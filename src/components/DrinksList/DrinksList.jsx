import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./DrinksList.css"

const DrinksList = ({config}) => {
    const [drinks, setDrinks] = useState([]);
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDrinks(data.drinks);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [url]);

    return (
        <div className="drinks-container" style={{ 
            gap: config.layout.gridGap,
            fontFamily: config.branding.fontFamily
        }}>
            {drinks.map(drink => (
                <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink} style={{ textDecoration: 'none' }}>
                    <div className="drink-card" style={{  
                        borderRadius: config.styling.cardBorderRadius 
                    }}>
                        {config.features.showImages && <img src={drink.strDrinkThumb} alt={drink.strDrink} />}
                        <div className="drink-name" style={{ color: config.styling.cardTextColor }}>{drink.strDrink}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default DrinksList;
