import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.submitted) {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!location.state?.submitted) {
    return null;
  }

  return (
    <section className="page thank-you">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <div className="section-label">Na send na boi</div>

        <h1>Thank You!</h1>

        <p>
         Bka nmn send gcash hehehe.
        </p>

        <Link to="/" className="primary-button">
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default ThankYou;