import { useUser } from 'hooks/useUser';
import React, { useState } from 'react';

const ProfileInfo = () => {
  const { user } = useUser();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    // Save the edited information (e.g., update backend, show success message)
    setIsEditing(false);
  };

  return (
    <div className="profile-info" style={styles.container}>
      <center>
        <h3 style={styles.heading}>Personal Information</h3>
        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <br />
            <button style={styles.button} onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p style={styles.info}><strong>Name:</strong> {name}</p>
            <p style={styles.info}><strong>Email:</strong> {email}</p>
            {/* <button style={styles.button} onClick={() => setIsEditing(true)}>Edit</button> */}
          </>
        )}
      </center>
    </div>
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  info: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default ProfileInfo;
