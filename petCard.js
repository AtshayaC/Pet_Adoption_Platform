import React from 'react';
import './petCard.css';

const PetCard = ({ pet }) => {
    return (
        <div className="pet-card">
            <img src={pet.imageUrl} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>{pet.type}</p>
        </div>
    );
};

export default PetCard;
