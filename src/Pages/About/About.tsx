import React from 'react';
import './About.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import gena from '../../images/team_members/gena.jpg'
import mickey from '../../images/team_members/mickey.jpg'
import winnie from '../../images/team_members/winnie.jpeg'
import carlson from '../../images/team_members/carlson.jpg'
import ProfileCard from "../../Components/ProfileCard";



const details = {
    winnieDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
}


const About: React.FC = () => {
    return (
        <div className='about_body'>
            <div className='about_wrap'>
                <div className='cover_about'>
                    <div className="text_background">
                        <div className='cover_text'>Meet Our Crazy Team</div>
                    </div>
                </div>
            </div>
            <div className='name_card_wrap'>
                <div className='name_card'>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Head' imageUrl={winnie} firstName='Winnie' lastName='The Pooh'/>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Liver' imageUrl={mickey} firstName='Mickey' lastName='The Mouse'/>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Heart' imageUrl={carlson} firstName='Carlson' lastName='The Propailer'/>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Finger' imageUrl={gena} firstName='Gena' lastName='The Crocodile'/>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Heart' imageUrl={carlson} firstName='Carlson' lastName='The Propailer'/>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Liver' imageUrl={mickey} firstName='Mickey' lastName='The Mouse'/>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Head' imageUrl={winnie} firstName='Winnie' lastName='The Pooh'/>
                    <ProfileCard social_insta={''} social_fb={''} details={details.winnieDetails} position='Finger' imageUrl={gena} firstName='Gena' lastName='The Crocodile'/>
                </div>
            </div>
            <div className='activities_locations'>
                <div className='activity_title'>
                    <LocationOnOutlinedIcon style={{color: "#333333"}}/>
                    <h2>Activity Locations</h2>
                </div>
                <div className='locations_list'>
                    <ul>
                        <li><LocationOnOutlinedIcon style={{color: "whitesmoke"}}/> Hells Canyon</li>
                        <li><LocationOnOutlinedIcon style={{color: "whitesmoke"}}/> Jermuk</li>
                        <li><LocationOnOutlinedIcon style={{color: "whitesmoke"}}/> Devils Bridge</li>
                        <li><LocationOnOutlinedIcon style={{color: "whitesmoke"}}/> Hells Canyon</li>
                        <li><LocationOnOutlinedIcon style={{color: "whitesmoke"}}/> Hells Canyon</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
