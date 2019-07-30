import React from 'react';

const Allergies = () => (
  <div className="allergies">
    {Array(10).fill(0).map((v, i) => (
      <div key={i} className="cell">
        <div className="cell__icon">ICON</div>
        <p className="cell__label">Allergy</p>
      </div>
    ))}
  </div>
);

export default Allergies;
