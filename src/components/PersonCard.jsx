import React from 'react';
import './PersonCard.css';

const PersonCard = ({ name, role }) => {
  return (
    <div className="person-card">
      <div className="person-info">
        <h3 className="person-name">{name}</h3>
        <p className="person-role">{role}</p>
      </div>
      <div className="person-keys">
        <span className="key-icon">🔑</span>
        <span className="key-icon">🔑</span>
        <span className="key-icon">🔑</span>
      </div>
    </div>
  );
};

export default PersonCard;