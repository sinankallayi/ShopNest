import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; //

const AdminPage = () => {
  return (
    <div className={styles.admin_container}>
      <h1>Welcome to Admin Dashboard</h1>
      <Link to="/">
        <button className={styles.green_btn}>Logout</button>
      </Link>
    </div>
  )
}

export default AdminPage