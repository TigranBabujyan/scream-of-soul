import React from 'react';
import './Footer.css';

interface FooterProps {
    facebookLink: string;
    instagramLink: string;
    email: string;
    contactNumber: string;
    additionalInfo?: string;
}

const Footer: React.FC<FooterProps> = ({ facebookLink, instagramLink, email, contactNumber, additionalInfo }) => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href={`mailto:${email}`}>scream.of.soul.team@gmail.com</a>
                <span>Number: {contactNumber}</span>
            </div>
            {additionalInfo && <p className="additional-info">{additionalInfo}</p>}
            <p>&copy; Scream Of Soul Team. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;