import React from 'react';
// import CardInfo from '../CardInfo/CardInfo';
import styles from './Card.module.css'
import Button from '../Button/Button';

export const Card = ({imagePath, title, description, cost, id, ...props}) => {
  return (
    <div className={styles.card}>
      <img {...props} className={styles.cardImg} src={imagePath} alt="" />
      <div className={styles.cardInfo}>
        <h2 className={styles.cardName}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.buttonBox}>
          <p className={styles.buttonCost}>{cost}</p>
          <Button className='cardBtn' text='Add to bag'/>
        </div>
      </div>
    </div>
  );
};

export default Card;