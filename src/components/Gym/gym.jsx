import React from 'react';
import './styles.css'
import GymImage1 from '../../images/cool-background.png'; // Add your images
import GymImage2 from '../../images/cool-background.png';
// Import more images as needed

// Define an array for the image gallery for easy mapping
const galleryImages = [GymImage1, GymImage2 /* , more images */ ];

const Gym = () => {
    return (
        <div className="gym-page">
            <h1>Welcome to Our Gym</h1>
            <p className="gym-description">
                Located in the heart of the city, our gym offers state-of-the-art equipment,
                professional trainers, and a wide range of fitness classes to help you achieve your fitness goals.
                Our state-of-the-art gym facility, nestled in the bustling heart of the city, is a sanctuary for
                fitness enthusiasts and beginners alike. Spanning a generous 20,000 square feet, our gym is
                designed to cater to a wide array of fitness goals, whether you're looking to build muscle,
                lose weight, enhance your endurance, or simply embrace a healthier lifestyle.
            </p>

            <div className="image-gallery">
                {galleryImages.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery ${index + 1}`}/>
                    </div>
                ))}
            </div>

            <h1>We are open for you!</h1>
            <p className="gym-description">
                Our facility also boasts specialized areas, including a functional training zone complete with TRX,
                battle ropes, and sandbags, a serene studio for mind-body classes, and a spacious boxing area with
                heavy bags and speed bags. For those seeking personalized guidance, our team of experienced personal
                trainers is available to provide one-on-one sessions tailored to your specific goals.
                After your workout, unwind in our luxurious locker rooms, equipped with showers, saunas,
                and steam rooms. For added convenience, we offer on-site nutrition counseling and a juice
                bar serving up fresh, healthy smoothies and snacks.
            </p>

            <h2>Location</h2>
            <p>123 Fitness Street, Wellness City</p>

            {/* Embed a Google Map */}
            <div className="map-container">
                <iframe
                    title="gym-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243645.6170302329!2d-74.25986568785015!3d40.697403442964354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUwLjMiTiA3NMKwMTUnMzUuNiJX!5e0!3m2!1sen!2s!4v1633626854386!5m2!1sen!2s"
                    width="800"
                    height="450"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Gym;
