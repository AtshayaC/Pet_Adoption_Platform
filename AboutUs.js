import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="intro">
                <h1>About Us</h1>
                <p>Welcome to [Your Pet Adoption Platform Name]! We are passionate about connecting loving families with their new furry friends. Our mission is to help animals in need find safe, loving, and caring homes.</p>
            </section>

            <section className="mission-vision">
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>To provide a second chance to homeless pets by connecting them with caring owners who will love and cherish them for a lifetime.</p>
                </div>
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>To create a world where every pet has a home and a loving family. We believe in a future where no animal is left without care.</p>
                </div>
            </section>

            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="img.jpg" alt="Team Member 1" />
                        <h3>Kumarasamy</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="img.jpg" alt="Team Member 2" />
                        <h3>Velliyangiri</h3>
                        <p>Adoption Specialist</p>
                    </div>
                    <div className="team-member">
                        <img src="img.jpg" alt="Team Member 3" />
                        <h3>Kuppusamy</h3>
                        <p>Veterinary Expert</p>
                    </div>
                    <div className="team-member">
                        <img src="img.jpg" alt="Team Member 4" />
                        <h3>Arumugam</h3>
                        <p>Operations Manager</p>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <div className="contact-details">
                    <p><strong>Email:</strong> petadoptionplatform@gmail.com</p>
                    <p><strong>Phone:</strong> +9875643210</p>
                    <p><strong>Address:</strong> 64 A,Pet Lane, Kunnathur, Tiruppur</p>
                    <p><strong>Follow Us:</strong></p>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
