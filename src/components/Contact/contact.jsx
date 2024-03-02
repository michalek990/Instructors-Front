import React, { useState } from 'react';
import './styles.css' // Assuming you have a CSS file for styling

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // For demonstration
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Our Contact Details</h2>
                    <p><strong>Address:</strong> 123 Example Street, City, Country</p>
                    <p><strong>Phone:</strong> +1 234 567 8900</p>
                    <p><strong>Email:</strong> contact@example.com</p>
                    {/* Add more contact details as needed */}
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
