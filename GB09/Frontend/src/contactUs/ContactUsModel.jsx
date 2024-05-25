import React from 'react';
import ContactForm from './ContactForm';

const ContactUsModal = ({ onClose }) => {
  const handleEmailClick = (email) => {
    const mailtoLink = `mailto:${email}?subject=Inquiry&body=Dear Developer,`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-4xl">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Contact the Developer</h1>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <p className="mb-4 text-slate-800">
            Hi there! We are passionate full-stack developers with expertise in
            MERN stack development. We have years of experience in building
            robust and scalable web applications using MongoDB, Express.js,
            React, and Node.js.
          </p>
          <p className="mb-4 text-slate-800">
            If you have any questions, suggestions, or potential projects in
            mind, feel free to reach out to us. We're always excited to discuss
            new ideas and collaborate on exciting projects.
          </p>
          <div>
            <h3>Developers:</h3>
            <table className="flex flex-col gap-y-3 p-4 text-center">
              <tr className="flex flex-row">
                <td>Gaurav Prajapati</td>
                <td
                  className="text-blue-800 underline px-4 flex cursor-pointer"
                  onClick={() =>
                    handleEmailClick('gaurav.2224mca1080@kiet.edu')
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  gaurav.2224mca1080@kiet.edu
                </td>
              </tr>
              <tr className="flex flex-row">
                <td>Harshita Tyagi</td>
                <td
                  className="text-blue-800 underline px-4 flex cursor-pointer"
                  onClick={() =>
                    handleEmailClick('harshita.2224mca1124@kiet.edu')
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  harshita.2224mca1124@kiet.edu
                </td>
              </tr>
              <tr className="flex flex-row">
                <td>Hayat Khan</td>
                <td
                  className="text-blue-800 underline px-4 flex cursor-pointer"
                  onClick={() => handleEmailClick('Hayat.2224mca1141@kiet.edu')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Hayat.2224mca1141@kiet.edu
                </td>
              </tr>
            </table>
          </div>
          <span>
            If there is any issue, click on the email address to send us a
            message.
            <br />
          </span>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;