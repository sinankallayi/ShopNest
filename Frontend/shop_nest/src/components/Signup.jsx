import React, { useState } from 'react';
import styles from "./styles.module.css";

const Signup = () => {
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signupHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log(username, email, password);
    // Handle sign-up logic here
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className={styles.signup_container} style={{ marginTop: '10%' }}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={signupHandler}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              required
              className={styles.input}
              onChange={handleUser}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className={styles.input}
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className={styles.input}
              onChange={handlePassword}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              className={styles.input}
              onChange={handleConfirmPassword}
            />
            <button type="submit" className="filter-button2" style={{ marginTop: '5%' }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
