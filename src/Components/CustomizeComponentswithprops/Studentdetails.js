import React from 'react';
import Studentdata from '../../data/Studentdata';
import Studentcard from './Studentcard';

function showadditional(additionalinfo) {
  const alertInformation = Object.entries(additionalinfo)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
}
export default function Studentdetails(props) {
  return (
    <div className = "wrapper">
      <h3>Studentdetails page</h3>
      {/* <p>{props.Studentdetails.size}</p> */}
      {/* <ul>
        { Studentdata.map(Studentdetails =>(
            <li key={Studentdetails.name} 
                scientificName = {Studentdetails.scientificName}
                size={Studentdetails.size}>
                {Studentdetails.name} 
                {Studentdetails.size}
                {Studentdetails.scientificName}

            </li>
            
        ))}
      </ul>  */}
      
      {Studentdata.map(Studentdetails => (
        <Studentcard key={Studentdetails.name} 
          name = {Studentdetails.name}
          size = {Studentdetails.size}
          scientificName = {Studentdetails.scientificName}
          diet = {Studentdetails.diet}          
          showadditional = {showadditional}
          additionalinfo = {Studentdetails.additionalinfo}
          />
      ))}
      
     </div>
  );
}
