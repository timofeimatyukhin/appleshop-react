import React from 'react';
import TextBlock from '../TextBlock/TextBlock';
import CardsBlock from '../CardsBlock/CardsBlock';
import styles from './InfoBlock.module.css'

export const InfoBlock = () => {
  return (
    <div className={styles.infoBlock}>
      <TextBlock />
      <CardsBlock />
    </div>
  );
};

export default InfoBlock;