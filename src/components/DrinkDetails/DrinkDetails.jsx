import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./DrinkDetails.css"

const DrinkDetails = ({config}) => {
    const { id } = useParams();
    const [drinkDetails, setDrinkDetails] = useState(null);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {
                setDrinkDetails(data.drinks[0]);
            })
            .catch(error => {
                console.error('Error fetching details:', error);
            });
    }, [id]);

    if (!drinkDetails) {
        return <div>Loading...</div>;
    }

    // Extracting ingredients and measures
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        if (drinkDetails[`strIngredient${i}`]) {
            ingredients.push({
                name: drinkDetails[`strIngredient${i}`],
                measure: drinkDetails[`strMeasure${i}`] || ''
            });
        }
    }

    return (
        <div className="drink-details-container" style={{ fontFamily: config.branding.fontFamily }}>            
            <div className="drink-image-container">
                <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} className="drink-image" />
            </div>
            
            <div className="drink-info">
                <h2 className="drink-header" style={{ color: config.styling.secondaryTextColor }}>{drinkDetails.strDrink}</h2>
                <div className="drink-ingredients">
                    <h3>Ingredients</h3>
                    <ul className="ingredient-list">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="ingredient-item">{ingredient.name} - {ingredient.measure}</li>
                        ))}
                    </ul>
                </div>
                <div className="drink-instructions">
                    <h3>Instructions</h3>
                    <p>{drinkDetails.strInstructions}</p>
                </div>
            </div>
        </div>
    );
    
};

export default DrinkDetails;
