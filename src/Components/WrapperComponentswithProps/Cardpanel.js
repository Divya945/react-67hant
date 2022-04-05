import React from 'react';
import './AnimalDetails.css';
export default function Cardpanel({ title, details, children }) {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  );
}
