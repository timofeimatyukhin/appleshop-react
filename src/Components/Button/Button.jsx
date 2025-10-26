import React from "react";
import styles from './Button.module.css'

export const Button = ({text}) => {
  return (
    <div>
      <button className={styles.bagButton}>{text}</button>
    </div>
  );  
};

export default Button;
