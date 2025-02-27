import React, { useState } from 'react';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === 'full-name') {
      setFullName(value);
    }
    if (event.target.name === 'email') {
      setEmail(value);
    }
    if (event.target.name === 'subject') {
      setSubject(value);
    }
    if (event.target.name === 'body') {
      setBody(value);
    }
  }

  function displayMessage(messageText, type) {
    setMessage(messageText);
    setMessageType(messageType);
  }

  function validateForm() {
    if (fullName.length < 3) {
      displayMessage('Full name must be at least 3 characters', 'error');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      displayMessage('Please enter a valid email address', 'error');
      return false;
    }
    if (subject.length < 3) {
      displayMessage('Subject must be at least 3 characters', 'error');
      return false;
    }
    if (body.length < 3) {
      displayMessage('Message must be at least 3 characters', 'error');
      return false;
    }
    return true;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', {
        fullName,
        email,
        subject,
        body
      });
      
      setFullName('');
      setEmail('');
      setSubject('');
      setBody('');

      displayMessage('Message sent successfully!', 'success');
    }
  }

  return (
    <div>
      <h1>Contact us</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="full-name">Full name</label>
          <input
            name="full-name"
            value={fullName}
            placeholder="Your full name"
            onChange={onTextInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Your email"
            onChange={onTextInputChange}
          />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            value={subject}
            placeholder="Fill in the subject"
            onChange={onTextInputChange}
          />
        </div>

        <div>
          <label htmlFor="body">Message</label>
          <textarea
            name="body"
            value={body}
            placeholder="Fill in the message"
            onChange={onTextInputChange}
          />
        </div>
        <div>
          {message}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;