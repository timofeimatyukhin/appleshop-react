import React from 'react';
import styles from './TextBlock.module.css'

export const TextBlock = () => {
  return (
    <div className={styles.textBlock}>
      <div className={styles.mainText}>All models.</div>
      <div className={styles.secondaryText}>Take your pick.</div>
    </div>
  );
};

export default TextBlock;