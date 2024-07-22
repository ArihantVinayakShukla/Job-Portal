import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfilePage.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaTransgender } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { AiTwotoneCalendar } from "react-icons/ai";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditable, setIsEditable] = useState(false); // State to track if fields are editable
  const [editedUser, setEditedUser] = useState(null); // State to store the edited user data
  const userEmail = sessionStorage.getItem("email");

  useEffect(() => {
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
  const handleUpdateClick = (event) => {
    event.preventDefault();
    // Send updated user data to the backend
    axios
      .put(`${window.API_URL}/updateProfile`, editedUser) // Assuming the endpoint for updating user data is '/updateProfile'
      .then((response) => {
        if (response.status === 200) {
          // Update user state with the updated data from the backend
          setUser(editedUser);
          setIsEditable(false); // After successful update, set fields back to read-only
          console.log("User data updated successfully!");
        } else {
          console.log("Failed to update user data.");
        }
      })
      .catch((error) => {
        console.log("Error occurred while updating user data:", error);
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
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name.charAt(0)}
        </div>
        <h1>{user.name}'s Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          {[
            { icon: <BsFillPersonFill />, name: "name", label: "Name" },
            { icon: <AiFillMail />, name: "email", label: "Email" },
            { icon: <FaTransgender />, name: "gender", label: "Gender" },
            { icon: <ImBriefcase />, name: "profession", label: "Profession" },
            { icon: <FaGraduationCap />, name: "degree", label: "Degree" },
            { icon: <FaUniversity />, name: "university", label: "University" },
            { icon: <AiTwotoneCalendar />, name: "graduation", label: "Graduation Year" },
          ].map((field) => (
            <div key={field.name} className="info-group">
              <label>
                {field.icon}
                <span>{field.label}</span>
              </label>
              <input
                type="text"
                name={field.name}
                value={isEditable ? editedUser[field.name] : user[field.name]}
                onChange={handleFieldChange}
                readOnly={!isEditable || field.name === "email"}
              />
            </div>
          ))}
        </div>
        <div className="profile-actions">
          {isEditable ? (
            <>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button className="update-button" onClick={handleUpdateClick}>
                Update
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <div className="applied-jobs">
        <h2>Applied Jobs</h2>
        {user.jobApplications && user.jobApplications.length > 0 ? (
          <ul>
            {user.jobApplications.map((job, index) => (
              <li key={index}>
                <div className="job-title">{job.jobTitle}</div>
                <div className="job-company">{job.companyName}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't applied to any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
