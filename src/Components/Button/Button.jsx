import React from "react";
import styles from './Button.module.css'

export const Button = ({text, className = '', ...props}) => {
  const customBtn = styles[className] || '';

  return ( 
    <>
      <button {...props} className = {`${styles.btn} ${customBtn}`}>{text}</button>
    </>
  );  
};

export default Button;
