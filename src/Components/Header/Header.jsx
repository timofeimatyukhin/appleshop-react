import React from 'react';
import styles from './Header.module.css'
import Button from '../Button/Button';

export const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <img className={styles.headerImg} src="/Images/apple-logo.svg" alt=""/>
      <div className={styles.headerName}>Apple Shop</div>
      <Button className='headerBtn' text = {'Shop Bag'}/>
    </div>
  );
};

export default Header;