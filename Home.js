import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to Furry Friends Heaven</h1>
                <h3>Find your new best friend today!</h3>
            </header>
            <section className="pet-section">
                <h2>Our Pets</h2>
                <div className="pet-gallery">
                    <div className="pet-card">
                        <img src="/dog.jpg" alt="Dog" />
                        <h3>Buddy</h3>
                        <p>A friendly dog looking for a home.</p>
                    </div>
                    <div className="pet-card">
                        <img src="/cat.jpeg" alt="Cat" />
                        <h3>Mittens</h3>
                        <p>A cute cat looking for a family.</p>
                    </div>
                    <div className="pet-card">
                        <img src="/bird.jpg" alt="Birds" />
                        <h3>Birds</h3>
                        <p>Adopt loving love birds for happiness!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
