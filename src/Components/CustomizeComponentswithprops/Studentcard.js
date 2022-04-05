import React  from 'react';
import "./Studentdetails.css";
//import Studentdata from '../../data/Studentdata';
export default function Studentcard({name, size,scientificName,diet, notes,additionalinfo,showadditional}) {
    return (
        <div className = "student-wrapper">
             <h2>{name}</h2>
             <p>{scientificName}</p>
             <h4>{size}</h4>
             <h5>{diet}</h5>
             <button onClick ={ () =>showadditional(additionalinfo)} className = "student-wrapper button">MoreInfo</button>
        </div>
    )
}
Studentcard.defaultProps = {
    additionalinfo: {
      notes: 'No Additional Information'
    }
  }