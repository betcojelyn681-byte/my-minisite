import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '') {
      setError('Please enter your name and email.');
      return;
    }

    setError('');

    navigate('/thank-you', {
      state: {
        submitted: true
      }
    });
  }

  return (
    <section className="page contact-page">
      <div className="contact-card">
        <div className="section-label">CONTACT</div>

        <h1>Chall me Owshie</h1>

        <p className="contact-description">
        Baw ani mi basta wla na ni gi dugo okay na.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Dalia oi binajot..."
              rows="5"
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="submit-button">
            Send Na largo bading
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;