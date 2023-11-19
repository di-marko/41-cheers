import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./DrinkDetails.css";

// Get the default browser language
const getDefaultLanguage = () => {
    const languageSelect = {
        'it': 'IT',
        'es': 'ES',
        'de': 'DE',
        'fr': 'FR',
        // Add other languages as needed
    };

    const browserLanguage = navigator.language.split('-')[0];
    return languageSelect[browserLanguage] || 'EN';
};


const DrinkDetails = ({config}) => {
    const { id } = useParams();
    const [drinkDetails, setDrinkDetails] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(getDefaultLanguage());

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.drinks) {
                    const details = data.drinks[0];
                    const defaultLang = getDefaultLanguage();
                    const instructionsKey = `strInstructions${defaultLang}`;
                    if (details[instructionsKey]) {
                        setSelectedLanguage(defaultLang); 
                    } else {
                        setSelectedLanguage('EN');
                    }
                    setDrinkDetails(details);
                }
            })
            .catch(error => {
                console.error('Error fetching details:', error);
            });
    }, [id]);

    // Can be implemented as a dynamic component
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

    // Get instructions in the selected language
    const instructions = drinkDetails[`strInstructions${selectedLanguage}`] || drinkDetails.strInstructions;

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
                    <p>{instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default DrinkDetails;
