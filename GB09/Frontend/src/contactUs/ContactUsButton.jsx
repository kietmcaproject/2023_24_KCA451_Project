import React, { useState } from 'react';
import ContactUsModal from './ContactUsModel';

const ContactUsButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-4 bg-yellow-600 text-white rounded-full p-3 cursor-pointer animate-size"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </div>
      {showModal && <ContactUsModal onClose={handleCloseModal} />}
    </>
  );
};

export default ContactUsButton;


