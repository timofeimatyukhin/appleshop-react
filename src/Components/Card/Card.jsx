import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import styles from './Card.module.css'

export const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src="../public/Images/iphone17.jpg" alt="" />
      <CardInfo />
    </div>
  );
};

export default Card;