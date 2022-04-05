import React  from 'react';
import AnimalEmoji from './AnimalEmoji';
import Cardpanel from './Cardpanel';
//import PropTypes from 'prop-types';

export default function AnimalCard({diet,name,size,scientificName }) {
   return(
    <Cardpanel 
        title = "Animal"
        details = {<div><AnimalEmoji diet = {diet}/> {scientificName}</div>}>
        <h3>{name}</h3>
        <div>{size}Kg</div>
        <div>{diet.join(', ')}.</div>
        {/* <AnimalEmoji diet = {diet}/>
        <div>{scientificName}</div> */}
    </Cardpanel>
   )
}
// AnimalCard.PropTypes = {
//     diet: PropTypes.arrayOf(PropTypes.string).isRequired,
//     name: PropTypes.string.isRequired,
//     size: PropTypes.number.isRequired,
// }