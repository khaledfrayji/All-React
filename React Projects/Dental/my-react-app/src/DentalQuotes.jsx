import React, { useState, useEffect } from 'react';
import MyImage from "./assets/smile.png"
import './DentalQuotes.css';

export default function DentalQuotes() {
    const quotes = [
        "A smile is the universal welcome. – Max Eastman",
        "Your smile is a curve that sets everything straight. – Phyllis Diller",
        "Every tooth in a man's head is more valuable than a diamond. – Miguel de Cervantes",
        "Life is short. Smile while you still have teeth.",
        "Floss like a boss!",
        "A healthy smile is a beautiful smile.",
        "Your teeth are jewels, take care of them.",
        "Brush, floss, and smile!",
        "Behind every great smile, there's a great dentist.",
        "Smiles are free but they are worth a lot.",
    ];

    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
        }, 1000); // Change quote every 3 seconds

        return () => clearInterval(interval);
    }, [quotes.length]);

    return (
        <div className="dental-quotes">
            <h1>The New Life Begins With A Confident Smile</h1>
            <img src={MyImage} alt="smile" />
            <div className="quote-container">
                <p className="quote">“{quotes[currentQuote]}”</p>
            </div>
        </div>
    );
}
