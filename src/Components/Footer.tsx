import React from 'react';
import './Footer.css';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

interface FooterProps {
    facebookLink: string;
    instagramLink: string;
    email: string;
    contactNumber: string;
    additionalInfo?: string;
}

const Footer: React.FC<FooterProps> = ({
                                           facebookLink,
                                           instagramLink,
                                           email,
                                           contactNumber,
                                           additionalInfo }) => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div className='footer_links_position'>
                    <FacebookOutlinedIcon/>
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </div>
                <div className='footer_links_position'>
                    <InstagramIcon/>
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
                <div className='footer_links_position'>
                    <EmailOutlinedIcon/>
                    <a href={`mailto:${email}`}>
                        scream.of.soul.team@gmail.com
                    </a>
                </div>
                <div className='footer_links_position'>
                    <LocalPhoneOutlinedIcon/>
                    <span>Number: {contactNumber}</span>
                </div>
            </div>
            {additionalInfo && <p className="additional-info">{additionalInfo}</p>}
            <p>&copy; Scream Of Soul Team. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;