import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Your Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default Profile;
