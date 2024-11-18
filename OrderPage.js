import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OrderPage.css';

const pets = [
    { id: 1, name: 'Buddy', type: 'Dog', imageUrl: 'dog.jpg', description: 'A friendly dog looking for a home.' },
    { id: 2, name: 'Mittens', type: 'Cat', imageUrl: 'cat.jpeg', description: 'A cute cat looking for a family.' },
    { id: 3, name: 'Birds', type: 'Parrot', imageUrl: 'l.png', description: 'Adopt loving love birds for happiness!' },
    { id: 4, name: 'Charlie', type: 'Rabbit', imageUrl: 'rabbit.jpg' },
    { id: 5, name: 'Goldie', type: 'Fish', imageUrl: 'fish.jpg' },
    { id: 6, name: 'Rocky', type: 'Hamster', imageUrl: 'rat.jpg' },
    { id: 7, name: 'Max', type: 'Dog', imageUrl: 'max.jpeg' },
    { id: 8, name: 'Luna', type: 'Cat', imageUrl: 'luna.jpeg' },
    { id: 9, name: 'Sunny', type: 'Bird', imageUrl: 'sunny.jpeg' },
    { id: 10, name: 'Chico', type: 'Parrot', imageUrl: 'chico.jpg' },
];

const OrderPage = () => {
    const { id } = useParams();
    const pet = pets.find(p => p.id === parseInt(id));
    const navigate = useNavigate(); // Initialize navigate

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        numberOfPets: 1,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleConfirmOrder = async () => {
        if (formData.name && formData.email && formData.address && formData.phone && formData.numberOfPets > 0) {
            try {
                const response = await fetch('http://localhost:3001/api/order', { // Updated to match server port
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        petId: pet.id,
                        ...formData,
                    }),
                });
    
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('Error response text:', errorText);
                    throw new Error('Network response was not ok');
                }
    
                const data = await response.json();
                alert(`Thank you for ordering ${formData.numberOfPets} ${pet.name}(s)! We will contact you soon at ${formData.email} for the next steps.`);
                console.log('Order response:', data);
    
                // Redirect to AdoptPage after successful order
                navigate('/adopt'); // Redirect to the main Adopt page
            } catch (error) {
                console.error('Error placing order:', error);
                alert('There was an error placing your order. Please try again later.');
            }
        } else {
            alert('Please fill in all the fields and make sure the number of pets is greater than 0.');
        }
    };
    

    return (
        <div className="order-page">
            {pet ? (
                <>
                    <h1>Order {pet.name}</h1>
                    <h2>{pet.type}</h2>
                    <p>{pet.description}</p>

                    <h3>Order Information</h3>
                    <form className="order-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numberOfPets">Number of Pets:</label>
                            <input type="number" id="numberOfPets" name="numberOfPets" min="1" value={formData.numberOfPets} onChange={handleChange} required />
                        </div>
                        <button type="button" onClick={handleConfirmOrder}>Confirm Order</button>
                    </form>
                </>
            ) : (
                <h2>Pet not found</h2>
            )}
        </div>
    );
};
export default OrderPage;
