import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkzlqze");

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      {state.succeeded ? (
        <p className="status-message">Thanks for your message! You will get in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
