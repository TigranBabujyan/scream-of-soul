import React from 'react';
import styles from './InfoCard.module.scss'
import rope1 from '../images/rope1.jpg'
import rope2 from '../images/rope5.jpg'

const InfoCard: React.FC = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.card__image_container}>
                        <img
                            className={styles.card__image}
                            src={rope2}
                            alt=""
                        />
                    </div>

                    <svg className={styles.card__svg} viewBox="0 0 800 500">
                        <path
                            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                            stroke="transparent"
                            fill="#233b08"
                        />
                        <path
                            className={styles.card__line}
                            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                            stroke="pink"
                            strokeWidth="3"
                            fill="transparent"
                        />
                    </svg>
                    <div className={styles.card__content}>
                        <h1 className="styles.card__title">Lorem ipsum</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis,
                            amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
