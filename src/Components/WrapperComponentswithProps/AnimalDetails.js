import React from 'react';
import Studentdata from '../../data/Studentdata';
import AnimalCard from './AnimalCard';
import "./AnimalDetails.css"


export default function AnimalDetails() {
    return(
        <div className = "wrapper">
            {Studentdata.map( animal => <AnimalCard 
            key = {animal.name}
             name = {animal.name}
             size = {animal.size}
            //  diet = {animal.diet}
             diet = {animal.diet}
             scientificName = {animal.scientificName}
            />)}
        </div>       
        
    )
}