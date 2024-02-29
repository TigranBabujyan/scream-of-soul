import React from 'react';
import './About.css';
import gena from '../../images/team_members/gena.jpg'
import mickey from '../../images/team_members/mickey.jpg'
import winnie from '../../images/team_members/winnie.jpeg'
import carlson from '../../images/team_members/carlson.jpg'
import ProfileCard from "../../Components/ProfileCard";


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
                    {/*<div className='person_card'>*/}
                    {/*    <div className='personal_image'>*/}
                    {/*        <img className='personal_image'  src={gena}></img>*/}
                    {/*    </div>*/}
                    <ProfileCard position='Head' imageUrl={winnie} firstName='Winnie' lastName='The Pooh'/>
                    <ProfileCard position='Liver' imageUrl={mickey} firstName='Mickey' lastName='The Mouse'/>
                    {/*</div>*/}
                    {/*<div className='person_card'>*/}
                    {/*    <div className='personal_image'>*/}
                    {/*        <img className='personal_image'  src={winnie}></img>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className='person_card'>*/}
                    {/*    <div className='personal_image'>*/}
                    {/*        <img className='personal_image'  src={mickey}></img>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className='name_card'>
                    {/*<div className='person_card'>*/}
                    {/*    <div className='personal_image'>*/}
                    {/*        <img className='personal_image'  src={gena}></img>*/}
                    {/*    </div>*/}
                    <ProfileCard position='Heart' imageUrl={carlson} firstName='Carlson' lastName='The Propailer'/>
                    <ProfileCard position='Finger' imageUrl={gena} firstName='Gena' lastName='The Crocodile'/>
                    {/*</div>*/}
                    {/*<div className='person_card'>*/}
                    {/*    <div className='personal_image'>*/}
                    {/*        <img className='personal_image'  src={winnie}></img>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className='person_card'>*/}
                    {/*    <div className='personal_image'>*/}
                    {/*        <img className='personal_image'  src={mickey}></img>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default About;
