import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditable, setIsEditable] = useState(false); // State to track if fields are editable
  const [editedUser, setEditedUser] = useState(null); // State to store the edited user data
  const userEmail = sessionStorage.getItem("email");

  useEffect(() => {
    // Fetch user details based on the user's email
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${window.API_URL}/profile`, {
          params: { email: userEmail },
        });

        if (response.status === 200) {
          setUser(response.data.data);
        } else {
          console.log(response.data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, [userEmail]);

  // Function to handle the edit button click
  const handleEditClick = () => {
    setIsEditable(true);
    setEditedUser({
      ...user,
    });
  };

  // Function to handle changes in editable fields
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevEditedUser) => ({
      ...prevEditedUser,
      [name]: value,
    }));
  };

  // Function to handle the update button click
  const handleUpdateClick = () => {
    // Send updated user data to the backend
    axios.put(`${window.API_URL}/updateProfile`, editedUser) // Assuming the endpoint for updating user data is '/updateProfile'
      .then((response) => {
        if (response.status === 200) {
          // Update user state with the updated data from the backend
          setUser(editedUser);
          setIsEditable(false); // After successful update, set fields back to read-only
          console.log('User data updated successfully!');
        } else {
          console.log('Failed to update user data.');
        }
      })
      .catch((error) => {
        console.log('Error occurred while updating user data:', error);
      });
  };
  const handleCancelClick = () => {
    setIsEditable(false);
    setEditedUser(null);
  };


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-details">
        <p>Name:{isEditable ? ( 
          <input type="text" name="name" value={editedUser.name} onChange={handleFieldChange} />)
          : (
            user.name
          )
            }</p>
        <p>Email: {user.email}</p>
        <p>Gender: {isEditable ? (
          <input type="text" name="gender" value={editedUser.gender} onChange={handleFieldChange} />
        ) : (
          user.gender
        )}</p>
        <p>Profession: {isEditable ? (
          <input type="text" name="profession" value={editedUser.profession} onChange={handleFieldChange} />
        ) : (
          user.profession
        )}</p>
        <p>Degree: {isEditable ? (
          <input type="text" name="degree" value={editedUser.degree} onChange={handleFieldChange} />
        ) : (
          user.degree
        )}</p>
        <p>University: {isEditable ? (
          <input type="text" name="university" value={editedUser.university} onChange={handleFieldChange} />
        ) : (
          user.university
        )}</p>
        <p>Graduation: {isEditable ? (
          <input type="number" name="graduation" value={editedUser.graduation} onChange={handleFieldChange} />
        ) : (
          user.graduation
        )}</p>
        <p>

        </p>
      </div>
      <div className="profile-actions">
        {isEditable ? (
            <>
             <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
          <button className="update-button" onClick={handleUpdateClick}>Update</button>
          </>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
