import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import '../index.css';

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    username: "",
    email: "",
    message: ""
  });

  const { user } = useAuth();

  // handle input value
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactInfo({
      ...contactInfo,
      [name]: value
    });
  };

  // handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactInfo);
    try {
      const response = await fetch("/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactInfo)
      });
      if (response.ok) {
        alert("Your message has been submitted successfully!");
        // Clear the form fields after successful submission
        setContactInfo({
          username: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later to contact us."); // Generic error message
    }
  };

  return (
    <section>
      <main>
        <div className="section-contact">
          <div className='container grid grid-two-cols'>
            <div className="registration-image">
              <img src="/public/3cb2d0bd58ca76bd1a69ccf568507837-removebg-preview.png" alt="" width="500" height="500" />
            </div>
            <div className="contact-info">
              <h1>Contact Us</h1>
              <p>Please fill out the form below to reach us.</p>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" name='username' placeholder='Enter your name' id='username' required autoComplete='off' value={contactInfo.username} onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name='email' placeholder='Enter your email' id='email' required autoComplete='off' value={contactInfo.email} onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea name='message' placeholder='Enter your message' id='message' required autoComplete='off' value={contactInfo.message} onChange={handleInput} />
                </div>
                <br />
                <button type="submit" className='btn btn-submit blue'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Contact;
