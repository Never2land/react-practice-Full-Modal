import * as React from 'react';
import { useState } from 'react';
import Modal from './Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import './style.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [button, setButton] = useState(2);

  const handleClick = (event) => {
    setButton(Number(event.target.value));
    setShowModal(true);
  };
  return (
    <div>
      <div className="container">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {showModal && (
            <Modal onClose={() => setShowModal(false)} num={button} />
          )}
        </AnimatePresence>
        <button
          className="button"
          value="1"
          onClick={(event) => handleClick(event)}
        >
          Show Modal
        </button>
        <button
          value="2"
          className="button"
          onClick={(event) => handleClick(event)}
        >
          Show Modal2
        </button>
      </div>
    </div>
  );
}
