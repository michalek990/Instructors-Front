import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Image1 from '../../images/chat.png';
import Image2 from '../../images/chat.png';

const contentBlocks = [
    {
        id: 1,
        imgSrc: Image1,
        text: "This is our state-of-the-art gym facility, featuring the latest equipment.",
        imgLeft: true, // Image on the left
    },
    {
        id: 2,
        imgSrc: Image2,
        text: "Our experienced instructors are here to guide you on your fitness journey.",
        imgLeft: false, // Image on the right
    },
    // Add more content blocks as needed
];
const Home = () => {
    return (
        <div className="main-page">
            <h1>Welcome to Our Website</h1>
            <div className="content-section">
                {contentBlocks.map(({ id, imgSrc, text, imgLeft }) => (
                    <div key={id} className={`content-block ${imgLeft ? 'img-left' : 'img-right'}`}>
                        <img src={imgSrc} alt={`Content ${id}`} />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
            <div className="navigation-buttons">
                {/* Navigation buttons as before */}
            </div>
        </div>
    );
}

export default Home;