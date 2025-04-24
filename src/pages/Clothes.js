import React from 'react';
import '../assets/styles.css';

const Clothes = () => {
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
                <h1>Clothes</h1>
                {/* Add content related to clothes here */}
            </main>

            <footer>
                <p>&copy; 2023 Clothing E-Commerce. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Clothes;