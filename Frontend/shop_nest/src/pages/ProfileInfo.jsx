import { useUser } from 'hooks/useUser';
import React, { useState } from 'react';

const ProfileInfo = () => {
  const {user}=useUser()
  console.log(user)

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
 
  const handleSave = () => {
    // Save the edited information (e.g., update backend, show success message)
    setIsEditing(false);
  };

  return (
    <div className="profile-info" style={{ justifyContent: 'center' }}>
      <center>
        <h3>Personal Information</h3>
        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
           
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
          
            {/* <button onClick={() => setIsEditing(true)}>Edit</button> */}
          </>
        )}
      </center>
    </div>
  );
};

export default ProfileInfo;
