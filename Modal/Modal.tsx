import * as React from 'react';
import styles from './Modal.module.css';
import { motion } from 'framer-motion';

export default function Modal({ onClose }) {
  // Write your code here
  const handleClick = () => {
    onClose && onClose();
  };
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
    },
  };
  return (
    <div onClick={handleClick} className={styles.backdrop}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
      >
        <h1 className={styles.text}>Create this Modal</h1>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </motion.div>
    </div>
  );
}
