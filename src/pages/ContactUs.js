import React from 'react';
import '../assets/styles.css';

const ContactUs = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="clothes.html">Clothes</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <h1>Contact Us</h1>
                <p>Email: info@clothingstore.com</p>
                <p>Phone: (123) 456-7890</p>
            </main>

            <footer>
                <p>&copy; 2023 Clothing E-Commerce. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUs;