import React, { useEffect } from 'react';
import './styles.scss';
import { ReactComponent as Close } from '../../assets/images/close.svg';

export function Modal({ handleClose, message, modalIsOpen }) {
  const refModal = React.useRef(null);

  const handleClickOutside = React.useCallback(
    (event) => {
      if (modalIsOpen && !refModal.current.contains(event.target)) {
        handleClose();
      }
    },
    [modalIsOpen, handleClose],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    if (modalIsOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflowY = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
  }, [modalIsOpen]);

  return (
    <div className="overlay">
      <div className="modal" ref={refModal}>
        <div className="modal__header">
          <button className="modal__close" onClick={handleClose}>
            <Close />
          </button>
        </div>
        <p className="modal__message">{message}</p>
      </div>
    </div>
  );
}
