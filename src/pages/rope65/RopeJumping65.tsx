import React from 'react';
import './RopeJumping65.css';
import rope1 from '../../images/rope1.jpg'
import InfoCard from "../../Components/InfoCard";


const About: React.FC = () => {

    let windowHeight = window.innerHeight

    return (
        <div className='body_65meters'>
            {/*<div className='rope_image'>*/}
            {/*    /!*<div className='img_wrap'>*!/*/}
            {/*        <img className='img_wrap' src={rope1}></img>*/}
            {/*    /!*</div>*!/*/}
            {/*    <div className='text_img'>*/}
            {/*        Lorem Ipsum is simply dummy text of the printing and typesetting industry.*/}
            {/*        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,*/}
            {/*        when an unknown printer took a galley of type and scrambled it to make a type specimen book.*/}
            {/*        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.*/}
            {/*        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,*/}
            {/*        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className='card_wrap'>
                <div className='cards'>
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                </div>
                <div className='cards'>
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                </div>
                {/*<div className='cards'>*/}
                {/*</div>*/}
                {/*<div className='cards'>*/}
                {/*</div>*/}
                <div className='list_wrap'>
                    <div className='list_title'>Lorem Ipsum</div>
                    <ol>
                        <li>ww</li>
                        <li>ss</li>
                        <li>dd</li>
                        <li>ee</li>
                        <li>ss</li>
                        <li>zz</li>
                        <li>gg</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default About;
