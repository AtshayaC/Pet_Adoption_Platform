import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adopt.css';

const pets = [
    {
        id: 1,
        name: 'Buddy',
        type: 'Dog',
        breed: 'Shitzu',
        location:'Kunnathur',
        price: '₹5000',
        imageUrl: 'dog.jpg',
        description: 'Buddy is a loyal and friendly dog, always eager to play fetch and go on walks. He is well-behaved, loves children, and is looking for a loving home that can provide him with the care and companionship he deserves. Buddy would thrive in a family setting where he can get plenty of attention.',
    },
    {
        id: 2,
        name: 'Mittens',
        type: 'Cat',
        breed: 'Persian',
        location:'Tiruppur',
        price: '₹3000',
        imageUrl: 'cat.jpeg',
        description: 'Mittens is a playful and curious cat who enjoys lounging in sunny spots and chasing feather toys. She has a gentle demeanor and loves to cuddle. Mittens would be perfect for a family or individual who wants a calm yet affectionate companion.',
    },
    {
        id: 3,
        name: 'Birds',
        type: 'Parrot',
        breed: 'Love Birds',
        location:'Erode',
        price: '₹1500',
        imageUrl: 'l.png',
        description: 'These love birds are a colorful and lively addition to any home. They are known for their strong bond with their owners and each other, often singing and playing together. Ideal for someone looking for a cheerful and low-maintenance pet.',
    },
    {
        id: 4,
        name: 'Charlie',
        type: 'Rabbit',
        breed: 'Angora',
        location:'Avinashi',
        price: '₹800',
        imageUrl: 'rabbit.jpg',
        description: 'Charlie is a fluffy rabbit who loves to hop around and explore his surroundings. He enjoys being held and petted, and would do well in a quiet environment where he can feel safe. Charlie is perfect for small animal lovers who enjoy a gentle and calm pet.',
    },
    {
        id: 5,
        name: 'Goldie',
        type: 'Fish',
        breed: 'Goldfish',
        location:'Perundurai',
        price: '₹2000',
        imageUrl: 'fish.jpg',
        description: 'Goldie is a beautiful goldfish that brings a sense of tranquility to any room. She is easy to care for and enjoys swimming around her tank. Goldie is perfect for first-time pet owners or anyone looking for a low-maintenance pet.',
    },
    {
        id: 6,
        name: 'Rocky',
        type: 'Hamster',
        breed: 'Syrian',
        location:'Erode',
        price: '₹400',
        imageUrl: 'rat.jpg',
        description: 'Rocky is a tiny ball of energy who loves running on his wheel and exploring his cage. He is perfect for anyone looking for a fun and entertaining small pet. Rocky requires minimal care but loves interaction and treats.',
    },
    {
        id: 7,
        name: 'Max',
        type: 'Dog',
        breed: 'German Shepherd',
        location:'Erode',
        price: '₹7000',
        imageUrl: 'max.jpeg',
        description: 'Max is an energetic and protective dog who loves outdoor adventures and being around his family. He is great with kids and makes for an excellent companion for an active household. Max will keep you on your toes with his playful spirit!.',
    },
    {
        id: 8,
        name: 'Luna',
        type: 'Cat',
        breed: 'Siamese',
        location:'Erode',
        price: '₹3500',
        imageUrl: 'luna.jpeg',
        description: 'Luna is a mysterious and independent cat with a soft spot for her humans. She loves to curl up in warm spots and observe her surroundings. Luna would be a great fit for someone who enjoys a peaceful yet affectionate pet.',
    },
    {
        id: 9,
        name: 'Sunny',
        type: 'Bird',
        breed: 'Canary',
        location:'Erode',
        price: '₹1200',
        imageUrl: 'sunny.jpeg',
        description: 'Sunny is a bright and cheerful bird who loves to sing and mimic sounds. He is very social and enjoys spending time with his owner. Sunny is perfect for someone who loves birds and enjoys having an interactive pet.',
    },
    {
        id: 10,
        name: 'Chico',
        type: 'Parrot',
        breed: 'Macaw',
        location:'Erode',
        price: '₹6000',
        imageUrl: 'chico.jpg',
        description: 'Chico is a smart and talkative parrot who enjoys human interaction and learning new tricks. He is full of personality and loves to be the center of attention. Chico would thrive in a home where he can receive plenty of mental stimulation and affection.',
    },
];

const Adopt = () => {
    const [selectedPet, setSelectedPet] = useState(null);
    const navigate = useNavigate();

    const handleAdoptClick = (id) => {
        const pet = pets.find(p => p.id === id);
        setSelectedPet(pet);
    };

    const handleOrderClick = () => {
        if (selectedPet) {
            navigate(`/order/${selectedPet.id}`);
        }
    };

    return (
        <div className="adopt">
            <h1>Adopt a Pet</h1>
            <div className="pet-details">
                {pets.map(pet => (
                    <div key={pet.id} className="pet-card" onClick={() => handleAdoptClick(pet.id)}>
                        <img src={pet.imageUrl} alt={pet.name} />
                        <h2>{pet.name}</h2>
                        <p>{pet.type}</p>
                    </div>
                ))}
            </div>

            {selectedPet && (
                <div className="pet-description">
                    <h2>{selectedPet.name}</h2>
                    <img src={selectedPet.imageUrl} alt={selectedPet.name} />
                    <div>
                        <p><strong>Type:</strong> {selectedPet.type}</p>
                        <p><strong>Breed:</strong> {selectedPet.breed}</p>
                        <p><strong>Location:</strong> {selectedPet.location}</p>
                        <p><strong>Price:</strong> {selectedPet.price}</p>
                        <h4> {selectedPet.description}</h4>
                    </div>
                    <h4>To adopt a pet ,you should login or signup</h4>
                    <button onClick={handleOrderClick}>Adopt {selectedPet.name}</button>
                </div>
            )}
        </div>
    );
};

export default Adopt;
