import React, { useState } from 'react';

const ProfileSettings = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a preview URL for the selected file
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    // Handle the file upload logic here
    // For example, you could send the file to a server
    // using an API call, or upload it to a cloud storage service
    console.log('File uploaded:', selectedFile);

    // Clear the selected file after upload
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="profile-settings">
      <h3>Upload Profile Picture</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        {previewUrl && (
          <div>
            <h4>Preview:</h4>
            <img src={previewUrl} alt="Profile Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
