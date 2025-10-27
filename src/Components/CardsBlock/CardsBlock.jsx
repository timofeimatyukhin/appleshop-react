import React from "react";
import styles from "./CardsBlock.module.css";
import Card from "../Card/Card";

export const CardsBlock = () => {
  return <ul className={styles.cardsList}>
    <Card imagePath="../public/Images/iphone17.jpg" title={<>iPhone 17 Pro & <br /> iPhone 17 Pro Max</>} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni illo est vero delectus magnam 
        asperiores deserunt maiores. Quo rem placeat molestiae nesciunt odio explicabo hic incidunt, cumque,
        atque obcaecati dolores." cost="From $1099 or $45.79/mo. for 24 mo.*"/>
    <Card imagePath="../public/Images/iphone17air.jpg" title="iPhone Air" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni illo est vero delectus magnam 
        asperiores deserunt maiores. Quo rem placeat molestiae nesciunt odio explicabo hic incidunt, cumque,
        atque obcaecati dolores." cost="From $999 or $41.62/mo. for 24 mo.*"/>
    <Card imagePath="../public/Images/iphone17basic.jpg" title="iPhone 17" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni illo est vero delectus magnam 
        asperiores deserunt maiores. Quo rem placeat molestiae nesciunt odio explicabo hic incidunt, cumque,
        atque obcaecati dolores." cost="From $799 or $33.29/mo. for 24 mo.*"/>
    <Card imagePath="../public/Images/iphone16plus.jpg" title={<>iPhone 16 & <br/> iPhone 16 Plus</>} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni illo est vero delectus magnam 
        asperiores deserunt maiores. Quo rem placeat molestiae nesciunt odio explicabo hic incidunt, cumque,
        atque obcaecati dolores." cost="From $699 or $29.12/mo. for 24 mo.*"/>
    <Card imagePath="../public/Images/iphone16e.jpg" title="iPhone 16e" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni illo est vero delectus magnam 
        asperiores deserunt maiores. Quo rem placeat molestiae nesciunt odio explicabo hic incidunt, cumque,
        atque obcaecati dolores." cost="From $599 or $24.95/mo. for 24 mo.*"/>
  </ul>;
};

export default CardsBlock;
