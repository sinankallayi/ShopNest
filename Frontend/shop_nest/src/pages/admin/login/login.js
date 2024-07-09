import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import styles from "components/styles.module.css";
import { toast } from 'react-toastify';
import { useAdmin } from 'hooks/useAdmin';
import { getToken } from 'utils/auth';

const AdminLogin = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()
  const {user, login} = useAdmin()
  
  useEffect(() => {
    if(user) navigate('/dashboard')
  }, [])
  

  const signHandler=(e)=>{
      console.log(email,password);
      e.preventDefault()
      login(email, password)
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
          <h1>Admin Login</h1>
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
    </div>
  </div>
);
};



export default AdminLogin