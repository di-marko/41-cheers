import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./DrinksList.css"

const DrinksList = ({config}) => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch(config.api.drinksEndpoint)
            .then(response => response.json())
            .then(data => {
                setDrinks(data.drinks);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [config.api.drinksEndpoint]);

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
