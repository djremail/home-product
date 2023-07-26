import React from 'react';
import './About.scss'

const Contacts = () => {
    return (
        <div className="contacts-block">
            <h2>Contact Us</h2>
            <h4>If you have any questions or inquiries, feel free to get in touch with us. We would love to hear from you!</h4>
            <div className="contact-details">
                <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                <p><strong>Email:</strong> info@example.com</p>
                <p><strong>Phone:</strong> +1 123-456-7890</p>
            </div>
        </div>
    );
};

export default Contacts;