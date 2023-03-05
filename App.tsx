import * as React from 'react';
import { useState } from 'react';
import Modal from './Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import './style.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="container">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </AnimatePresence>
        <button className="button" onClick={() => setShowModal(true)}>
          Show Modal
        </button>
      </div>
    </div>
  );
}
