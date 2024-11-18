import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; 
import { FaUserCircle } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUsername(storedUser.username);
            setEmail(storedUser.email);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <h1>Pet Adoption</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/adopt">Adopt</Link></li>
                <li><Link to="/contact">Feedback</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
                <li><Link to="/register" className="nav-link">Signup</Link></li>
            </ul>

            <div className="user-section">
                {username ? (
                    <>
                        <span>{username}</span>
                        <FaUserCircle className="user-icon" onClick={toggleDropdown} />
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
