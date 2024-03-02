import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Image1 from '../../images/home1.png';
import Image2 from '../../images/home2.png';
import Image3 from '../../images/home3.png';

const contentBlocks = [
    {
        id: 1,
        imgSrc: Image1,
        text: "State-of-the-art Gym Facility\n" +
            "\"Our state-of-the-art gym facility is designed to cater to all your fitness needs. Equipped with the latest, " +
            "most advanced equipment in the market, our gym provides an unparalleled workout experience.",
        imgLeft: true,
    },
    {
        id: 2,
        imgSrc: Image2,
        text: "Experienced Instructors\n" +
            "\"Our team of experienced instructors is the heartbeat of our fitness community. With certifications in various fitness" +
            " disciplines and years of hands-on experience, they bring a wealth of knowledge and passion to every session.",
        imgLeft: false,
    },
    {
        id: 3,
        imgSrc: Image3,
        text: "Fitness Journey Guidance\n" +
            "\"Embarking on a fitness journey can be a transformative experience, and our gym is committed to being a part of your journey every step " +
            "of the way. Our experienced instructors not only guide you through each workout but also educate you on the principles of fitness and wellness.",
        imgLeft: true,
    }
];
const Home = () => {
    return (
        <div className="main-page">
            <div className="content-section">
                <h1>Welcome to Our Website</h1>
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