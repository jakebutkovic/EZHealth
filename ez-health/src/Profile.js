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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
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
    navigate('/'); // Redirect to the homepage after submission
  };

  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <h1>Patient Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
        </div>
        <div>
          <label>Pronouns:</label>
          <input type="text" value={pronouns} onChange={(e) => setPronouns(e.target.value)} required />
        </div>
        <div>
          <label>Profile Photo:</label>
          <input type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProfilePage;