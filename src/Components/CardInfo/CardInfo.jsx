import React from 'react';
import styles from './CardInfo.module.css'
import Button from '../Button/Button';

export const CardInfo = () => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardName}>iPhone 17 Pro & 
        iPhone 17 Pro Max</div>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni illo est vero delectus magnam 
        asperiores deserunt maiores. Quo rem placeat molestiae nesciunt odio explicabo hic incidunt, cumque,
        atque obcaecati dolores.</div>
      <Button className = {styles.cardButton} text = {'Add to bag'}/>
    </div>
  );
};

export default CardInfo;