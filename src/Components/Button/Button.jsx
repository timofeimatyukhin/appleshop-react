import React, {useState} from "react";
import styles from "./Button.module.css";

export const Button = ({
  text,
  className = "",
  ...props
}) => {
  const [count, setCount] = useState(0);
  const customBtn = styles[className] || "";

  const handleAddToBag = () => {
    setCount(1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  if (count > 0 && className === 'cardBtn') {
    return (
      <div className={styles.counterContainer}>
        <button onClick={handleDecrement} className={`${styles.counterBtn}`}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button onClick={handleIncrement} className={`${styles.counterBtn}`}>
          +
        </button>
      </div>
    );
  }

  return (
    <>
      <button
      {...props} 
      className={`${styles.btn} ${customBtn}`}
      onClick={handleAddToBag}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
