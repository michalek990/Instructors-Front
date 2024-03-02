import React, { useState } from 'react';
import './styles.css' // Assuming you have a CSS file for styling

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAcitve', data.isActive)
                window.location.href = '/';
            } else {
                setError('Server error. Try after few minutes again :(');
            }
        } catch (error) {
            console.log(error);
            if (error.response.data.status === 400) {
                setError("Check your input data");
            }
            else if(error.response.data.statusCode === 409){
                setError(error.response.data.details);
            }
            else if(error.response.data.statusCode === 404)
                setError(error.response.data.details);
            else if(error.response.data.statusCode === 500)
                setError(error.response.data.details);
        }
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
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
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
