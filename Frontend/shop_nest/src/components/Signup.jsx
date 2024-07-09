import React, { useState } from 'react';
import styles from "./styles.module.css";
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const signupHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }else{ // Handle sign-up logic here
    e.preventDefault();
    axios.post('http://localhost:5000/signup',{username:username,email:email,password:password})
    .then(response =>{
      const result =response.data
      if(result.success){
        toast.success(result.message)
        navigate(-1)
      }
    })
    .catch(err=>console.log(err))
  }
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
    <div className={styles.login_container}>
    <div className={styles.login_form_container}>
      <div className={styles.left}>
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
            <button type="submit" className={styles.green_btn} style={{ marginTop: '5%' }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};






export default Signup;