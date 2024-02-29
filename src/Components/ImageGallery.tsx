import React from 'react';
import './ImageGallery.css';
import rope1 from '../images/rope1.jpg';
import rope2 from '../images/rope2.jpg';
import rope3 from '../images/rope3.jpg';
import rope4 from '../images/rope4.jpg';
import rope5 from '../images/rope5.jpg';
import canyoning1 from '../images/canyoning1.jpg';
import ice_skiing2 from '../images/ice_skiing2.jpg';
import ice_skiing3 from '../images/ice_skiing3.jpg';
import canyoning2 from '../images/canyoning2.jpg';
import canyoning3 from '../images/canyoning3.jpg';
import {Typography} from "@mui/material";


const ImageGallery = () => {
    return (
        <div className="container">
            <div id="img-1" className="img-container">
                <img className="img-1" src={rope1} alt="Image 1"/>
            </div>
            <div id="img-1" className="img-container second-animation">
                <img className="img-2" src={canyoning1} alt="Image 2"/>
            </div>
            <div id="img-1" className="img-container third-animation">
                <img className="img-3" src={rope5} alt="Image 3"/>
            </div>
            <div id="img-1" className="img-container fourth-animation">
                <img className="img-4" src={canyoning2} alt="Image 4"/>
            </div>
            {/*<Typography>Scream Of Soul Team</Typography>*/}
            {/*<div id="img-1" className="img-container fifth-animation">*/}
            {/*    <img className="img-5" src={rope3} alt="Image 5"/>*/}
            {/*</div>*/}
            {/*<div id="img-1" className="img-container sixth-animation">*/}
            {/*    <img className="img-6" src={canyoning3} alt="Image 6"/>*/}
            {/*</div>*/}
            {/*<div id="img-1" className="img-container seventh-animation">*/}
            {/*    <img className="img-7" src={rope4} alt="Image 7"/>*/}
            {/*</div>*/}
            {/*<div id="img-1" className="img-container eight-animation">*/}
            {/*    <img className="img-8" src={ice_skiing2} alt="Image 8"/>*/}
            {/*</div>*/}
            {/*<div id="img-1" className="img-container ninth-animation">*/}
            {/*    <img className="img-9" src={ice_skiing3} alt="Image 1"/>*/}
            {/*</div>*/}
        </div>
    );
};

export default ImageGallery;
