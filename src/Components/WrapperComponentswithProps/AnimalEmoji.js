import React from 'react';

import "./AnimalDetails.css"

function convertfood(food) {
    switch(food) {
        case 'insert':
            return '🐜';
        case 'plants':
            return '🌱';
        case 'meat':
            default:
            return '🍖';
    }
}
export default function AnimalEmoji({diet, scientificName}) {
    return(
        <div className = "details">
            <h3>Details:</h3>
            {/* <div>scientificName : {scientificName}</div> */}
            <div>Diet: {diet.map(food =>convertfood(food)).join(' ')}</div>
        </div>       
        
    )
}