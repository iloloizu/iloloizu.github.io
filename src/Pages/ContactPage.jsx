import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Ensure Toastify CSS is imported

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData();
    formPayload.append("access_key", "d2244be5-c3cf-4024-b947-124ab8db998b");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    const object = Object.fromEntries(formPayload);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Form submission error. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id='contact' className='contact'>
        <div className="contact-section">
          <div className="contact-left">
            <div className="contact-header">
              <p>I am always open to connecting and hearing about potential opportunities. If you're interested in mentorship or arranging a meeting, please feel free to reach out and let me know.</p>
            </div>
            <div className="contact-details">
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:iloloizu97@gmail.com" className="contact-email">iloloizu97@gmail.com</a>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder='Enter your email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                name="message"
                rows="6"
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button type='submit' className="contact-submit">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polygon points="22,2 15,22 11,13 2,9 22,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;