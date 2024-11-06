import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      dob,
      email,
      phone,
      gender,
      pronouns,
      profilePhoto,
    });
    navigate('/'); // Redirect to homepage
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.header}>Patient Profile</h1>
        <div style={styles.inputGroup}>
          <label>First Name:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Last Name:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Date of Birth:</label>
          <input 
            type="date" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Phone Number:</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Gender:</label>
          <input 
            type="text" 
            value={gender} 
            onChange={(e) => setGender(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Pronouns:</label>
          <input 
            type="text" 
            value={pronouns} 
            onChange={(e) => setPronouns(e.target.value)} 
            required 
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Profile Photo:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoChange} 
            required 
            style={styles.input}
          />
        </div>

        {photoPreview && (
          <div style={styles.photoPreviewContainer}>
            <img src={photoPreview} alt="Profile Preview" style={styles.photoPreview} />
          </div>
        )}

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#e3f2fd',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'left',  // Align to the left
    color: '#1565c0',
    fontSize: '2rem',    // Increase font size
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  photoPreviewContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  photoPreview: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#1565c0',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ProfilePage;
