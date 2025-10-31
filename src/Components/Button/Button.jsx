import React, {useEffect, useRef, useState} from "react";
import styles from "./Button.module.css";

export const Button = ({
  text,
  className = "",
  ...props
}) => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const toggleBlock = () => {
    setIsModalOpen(prev => !prev);
  }

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

  if (className === 'headerBtn') {
    const dialogRef = useRef(null);

    useEffect(() => {
      if (isModalOpen) {
        dialogRef.current?.showModal();
      } else {
        dialogRef.current?.close();
      }
    }, [isModalOpen]);


    return (
      <>
        <button onClick={toggleBlock} className={styles.btn}>
          {isModalOpen ? 'Close' : 'Shop Bag'}
        </button>
        <dialog ref={dialogRef} className={styles.dialog}>
          <h2>Dialog</h2>
          <button onClick={toggleBlock}>Close</button>
        </dialog>
      </>
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
