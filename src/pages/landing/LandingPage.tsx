import React from 'react';
import ImageGallery from "../../Components/ImageGallery";
import Card from '../../Components/Card';

import './LandingPage.css';

import ice_skiing1 from "../../images/ice_skiing3.jpg"
import rope1 from "../../images/rope1.jpg"
import canyoning1 from "../../images/canyoning1.jpg"
import rope5 from "../../images/rope5.jpg"

const LandingPage: React.FC = () => {
    return (
        <div id="root">
            <div>
                <div className='title'>
                    <div className='title_top title_top_mobile'>Scream Of Soul</div>
                    <div className='title_bottom title_bottom_mobile'>Providing Memories Since 2015</div>
                </div>
                <div className='header_container1 first mobileView'></div>
                <div className='top_container_positioning'>
                    <div className='top_left_container'>
                        <ImageGallery/>
                    </div>
                    <div className='top_right_container first mobileView'>
                        <div className='text mob'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <img src={canyoning1} className='container_image_top'></img>
                    </div>
                </div>
                <div className='header_container2 second mobileView'></div>
                <div className='bottom_container_positioning'>
                    <div className='bottom_left_container second'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        <img src={rope1} className='container_image_bottom'></img></div>
                    <div className='bottom_right_container'>
                        <ImageGallery/>
                    </div>
                </div>
                <div className='header_container1 third mobileView'></div>
                <div className='top_container_positioning'>
                    <div className='top_left_container'>
                        <ImageGallery/>
                    </div>
                    <div className='top_right_container third'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        <img src={rope5} className='container_image_top'></img>
                    </div>
                </div>
                <div className='header_container2 fourth mobileView'></div>
                <div className='bottom_container_positioning'>
                    <div className='bottom_left_container fourth'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        <img src={ice_skiing1} className='container_image_bottom'></img></div>
                    <div className='bottom_right_container'>
                        <ImageGallery/>
                    </div>
                </div>
            </div>
            <div className='cardsPositioning mobileView'>
                <div className='cardBody'>
                    <Card
                        cart='#' // adding to cart
                        details='/rope_jumping_65'// Redirecting to Rope 65meters page
                        price='Price 25.000AMD'
                        title='Rope Jumping 65meters'
                        image='image1'
                    />
                    <Card
                        cart='#' // adding to cart
                        details='/rope_jumping_160' // Redirecting to Rope 160meters page
                        price='Price 55.000AMD'
                        title='Rope Jumping 160meters'
                        image='image2'
                    />
                </div>
                <div className='cardBody'>
                    <Card
                        cart='#' // adding to cart
                        details='/canyoning' // Redirecting to Canyoning page
                        price='Price 25.000AMD'
                        title='Canyoning "Devils Bridge"'
                        image='image3'
                    />
                    <Card
                        cart='#' // adding to cart
                        details='/wild_ice_skiing' // Redirecting to Wild Ice Skiing page
                        price='Price 25.000AMD'
                        title='Wild Ice Skiing'
                        image='image4'
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;