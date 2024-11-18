import React from 'react';
import PetCard from './petCard';
import './petList.css';

const pets = [
    { id: 1, name: 'Buddy', type: 'Dog', imageUrl: 'dog.jpg' },
    { id: 2, name: 'Mittens', type: 'Cat', imageUrl: 'cat.jpeg' },
    { id: 3, name: 'Birds', type: 'Parrot', imageUrl: 'l.png' },
    { id: 4, name: 'Charlie', type: 'Rabbit', imageUrl: 'rabbit.jpg' },
    { id: 5, name: 'Goldie', type: 'Fish', imageUrl: 'fish.jpg' },
    { id: 6, name: 'Rocky', type: 'Hamster', imageUrl: 'rat.jpg' },
    { id: 7, name: 'Max', type: 'Dog', imageUrl: 'max.jpeg' },
    { id: 8, name: 'Luna', type: 'Cat', imageUrl: 'luna.jpeg' },
    { id: 9, name: 'Sunny', type: 'Bird', imageUrl: 'sunny.jpeg' },
    { id: 10, name: 'Chico', type: 'Parrot', imageUrl: 'chico.jpg' },
];

const PetList = () => {
    return (
        <div className="pet-list">
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
};

export default PetList;
