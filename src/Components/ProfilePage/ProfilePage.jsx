import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfilePage.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaTransgender } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { AiTwotoneCalendar } from "react-icons/ai"


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
    <div className="profilePageContainer">
        <h1>{user.name}'s Profile CARD</h1>
    <div className="content">
      {isEditable ? <div className="text">Edit Your Profile!</div> : <div></div>}
      <form action="#">
        
        <section className="profileSection">
        <div className="field">
          
            {isEditable ? (
              <>
                <span className="span">
                  <BsFillPersonFill className="personIcon" />
                </span>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                  value={editedUser.name}
                  onChange={handleFieldChange}
                />
              </>
            ) : (
                <><span className="span">
                <BsFillPersonFill className="personIcon" />
              </span>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                value={user.name}
              />
              </>
            )}
          
        </div>
        <div className="field">
            {isEditable? (<>
        <span className="span">
                <AiFillMail className="personIcon" />
              </span>
          <input required type="email" placeholder="E-mail" className="input" value={user.email} />
          </> ): (<>
        <span className="span">
                <AiFillMail className="personIcon" />
              </span>
          <input required type="email" placeholder="E-mail" className="input" value={user.email} />
          </> )}
        </div>
        <div className="field">
          
            {isEditable ? (
              <><span className="span">
                <FaTransgender className="personIcon" />
              </span>
                <input
                  type="text"
                  name="gender"
                  className="input"
                  value={editedUser.gender}
                  placeholder="Gender"
                  onChange={handleFieldChange}
                />
              </>
            ) : (
                <><span className="span">
                <FaTransgender className="personIcon" />
              </span>
              <input type="text" name="gender" placeholder="Gender" className="input" value={user.gender} />
              </>
            )}
          
        </div>
        <div className="field">
        {isEditable ? (
            <>
            <span className="span">
                <ImBriefcase className="personIcon" />
              </span>
          <input type="text" className="input" placeholder="Experience" name="profession" value={editedUser.profession} onChange={handleFieldChange} />
          </>
        ) : (
            <>
            <span className="span">
                <ImBriefcase className="personIcon" />
              </span>
          <input type="text" className="input" placeholder="Experience" name="profession" value={user.profession} onChange={handleFieldChange} />
          </>
        )}
        </div>
        <div className="field">
            {isEditable ? (
                <>
                <span className="span">
                <FaGraduationCap className="personIcon" />
              </span>
          <input type="text" className="input" placeholder="Highest Education" name="degree" value={editedUser.degree} onChange={handleFieldChange} />
          </>
        ) : (
            <>
            <span className="span">
            <FaGraduationCap className="personIcon" />
          </span>
      <input type="text" className="input" name="degree" placeholder="Highest Education" value={user.degree} onChange={handleFieldChange} />
      </>
        )}
    </div>
    <div className="field">
    {isEditable ? (
        <>
        <span className="span">
            <FaUniversity className="personIcon" />
          </span>
          <input type="text" className="input" name="university" placeholder="University" value={editedUser.university} onChange={handleFieldChange} />
          </>
        ) : (
            <>
            <span className="span">
                <FaUniversity className="personIcon" />
              </span>
              <input type="text" className="input" name="university" placeholder="University" value={user.university} onChange={handleFieldChange} />
              </>
        )}
        </div>
        <div className="field">
        {isEditable ? (
            <>
            <span className="span">
                <AiTwotoneCalendar className="personIcon" />
              </span>
            <input type="text" className="input" name="graduation" placeholder="year of Graduation" value={editedUser.graduation} onChange={handleFieldChange} />
            </>
        ) : (
            <>
            <span className="span">
                <AiTwotoneCalendar className="personIcon" />
              </span>
            <input type="text" className="input" name="graduation" placeholder="year of Graduation" value={user.graduation} onChange={handleFieldChange} />
            </>
        )}
        </div>

        {isEditable ? (
          <>
            <button className="button cancelBtn" onClick={handleCancelClick}>
              Cancel
            </button>
            <button className="button updateBtn" onClick={handleUpdateClick}>
              Update
            </button>
          </>
        ) : (
          <button className="button" onClick={handleEditClick}>
            Edit
          </button>
        )}
    </section>
      </form>
    </div>
    </div>
  );
};

export default ProfilePage;