import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      message: message,
    };

    try {
      const response = await fetch('https://md-kaifee-portfolio.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();  // Parsing JSON response
      console.log('Response from server:', result);  // Log the full response
      
      if (result.isSuccess) {
        console.log('Email sent successfully:', result);
        setStatusMessage('Message sent successfully!');
        setEmail('');  
        setMessage(''); 
      } else {
        console.log('Error sending email:', result.errorMessage);
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Error sending message: ' + error.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {statusMessage && <div className="status-message">{statusMessage}</div>}
    </section>
  );
};

export default Contact;
