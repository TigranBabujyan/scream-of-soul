import React from 'react';
import './Title.css'

const TitleText: React.FC = () => {
    return (
        <div className='text_body'>
            <div className="container">
                <svg className='svg_text' viewBox="0 0 1400 200">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="80%">Scream Of Soul</text>
                    </symbol>
                    <g className="g-ants">
                        {[...Array(5)].map((_, index) => (
                            <use xlinkHref="#s-text" key={index} className="text-copy"></use>
                        ))}
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default TitleText;
