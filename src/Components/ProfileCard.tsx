import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    position: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, position, firstName, lastName }) => {
    return (
        <div className="card-container">
            <img className="profile-image" src={imageUrl} alt="Profile" />
            <div className="text-container">
                <p className="name-surname">{firstName} {lastName}</p>
                <h5>{position}</h5>
            </div>
        </div>
    );
}

export default ProfileCard;
