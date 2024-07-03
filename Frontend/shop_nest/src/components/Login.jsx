import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { toast } from 'react-toastify';

const Login = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()
  

  const signHandler=(e)=>{
      console.log(email,password);
      e.preventDefault()
      if(email === "admin@gmail.com" && password === "admin123"){
        navigate("/admin")
      }else{
        toast("Invalid email or password")
      }
  }

  const handleEmail=(e)=>{
      setEmail(e.target.value)
  }

  const handlePassword=(e)=>{
      setPassword(e.target.value)
  }




  return (
    <div className={styles.login_container} style={{paddingBottom:'8%'}}>
    <div className={styles.login_form_container}>
      <div className={styles.left}>
        <form className={styles.form_container} onSubmit={signHandler}>
          <h1>Login to Your Account</h1>
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
          {/* {error && <div className={styles.error_msg}>{error}</div>} */}
          <button type="submit" className={styles.green_btn}>
            Sign In
          </button>
        </form>
      </div>
      <div className={styles.right}>
        <h1>New Here ?</h1>
        <Link to="/signup">
          <button type="button" className={styles.white_btn}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  </div>
);
};



export default Login