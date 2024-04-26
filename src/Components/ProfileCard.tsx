import React from 'react';
import './ProfileCard.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


interface ProfileCardProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    position: string;
    details: string;
    social_insta: string;
    social_fb: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({social_insta, social_fb, details,
                                                     imageUrl, position, firstName,
                                                     lastName }) => {
    return (
        <div className='card_container_wrap'>
            <div className="card-container">
                <img className="profile-image" src={imageUrl} alt="Profile" />
            </div>
            <div className="text-container">
                <p className="name-surname">{firstName} {lastName}</p>
                <h5>{position}</h5>
            </div>
            <div className='person_details'>{details}</div>
            <div className='social_icons_position'>
                <a href={social_fb}>
                    <FacebookOutlinedIcon style={{ color: "#4FB477", opacity: "80%" }}/>
                </a>
                <a href={social_insta}>
                    <InstagramIcon style={{ color: "#4FB477", opacity: "80%"}}/>
                </a>
            </div>
        </div>
    );
}

export default ProfileCard;
