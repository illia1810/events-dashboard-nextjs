import { useRef } from 'react';
import classes from './NewsletterRegistration.module.css';

function NewsletterRegistration() {
  const emailInput = useRef();
  function registrationHandler(event) {
    event.preventDefault();

    fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({email: emailInput.current.value}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(res => console.log(res));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInput}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;