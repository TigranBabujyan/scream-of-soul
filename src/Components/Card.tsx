import React from 'react';
import {Link} from "react-router-dom";

import './Card.css';


interface CardProps {
    cart: string;
    details: string;
    title: string;
    price: string;
    image: string;
}

const Card: React.FC<CardProps> = ({title, details , price, cart, image }) => {
    return (
        <div className='card_body'>
            <section className='card_section'>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className={`cover item-a ${image}`}>
                                <div>
                                    <h1>{title}</h1>
                                </div>
                                <span className="price">{price}</span>
                                <div className="card-back">
                                    <a href={cart}>Add to cart</a>
                                    <Link to={`${details}`}>View detail</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Card;
