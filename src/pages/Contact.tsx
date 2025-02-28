import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as C from './Contact.styles';

type MessageType = 'success' | 'error' | '';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  body: string;
}

function Contact(): JSX.Element {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<MessageType>('');

  function onTextInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'full-name':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'body':
        setBody(value);
        break;
    }
  }

  function displayMessage(messageText: string, type: MessageType): void {
    setMessage(messageText);
    setMessageType(type);
  }

  function validateForm(): boolean {
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

  function onFormSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    
    if (validateForm()) {
      const formData: FormData = {
        fullName,
        email,
        subject,
        body
      };
      
      console.log('Form submitted:', formData);
      
      setFullName('');
      setEmail('');
      setSubject('');
      setBody('');

      displayMessage('Message sent successfully!', 'success');
    }
  }

  return (
    <C.ContactContainer>
      <h1>Contact us</h1>
      <form onSubmit={onFormSubmit}>
        <C.FormGroup>
          <label htmlFor="full-name">Full name</label>
          <C.InputStyle
            name="full-name"
            id="full-name"
            autoComplete="name"
            value={fullName}
            placeholder="Your full name"
            onChange={onTextInputChange}
          />
        </C.FormGroup>

        <C.FormGroup>
          <label htmlFor="email">Email</label>
          <C.InputStyle
            name="email"
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            placeholder="Your email"
            onChange={onTextInputChange}
          />
        </C.FormGroup>

        <C.FormGroup>
          <label htmlFor="subject">Subject</label>
          <C.InputStyle
            name="subject"
            id="subject"
            value={subject}
            placeholder="Fill in the subject"
            onChange={onTextInputChange}
          />
        </C.FormGroup>

        <C.FormGroup>
          <label htmlFor="body">Message</label>
          <C.MessageStyle
            name="body"
            id="body"
            value={body}
            placeholder="Fill in the message"
            onChange={onTextInputChange}
          />
        </C.FormGroup>
        <C.UserMessage messageType={messageType}>
          {message}
        </C.UserMessage>
        <C.CenterButton>
          <C.SubmitButton type="submit">Submit</C.SubmitButton>
        </C.CenterButton>
      </form>
    </C.ContactContainer>
  );
}

export default Contact;