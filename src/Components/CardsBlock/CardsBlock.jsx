import React from "react";
import styles from "./CardsBlock.module.css";
import Card from "../Card/Card";

export const CardsBlock = () => {
  return <ul className={styles.cardsList}>
    <Card />
  </ul>;
};

export default CardsBlock;
