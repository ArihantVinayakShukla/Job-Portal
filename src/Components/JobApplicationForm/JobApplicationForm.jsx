import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./JobApplicationForm.css";
import Navbar3 from "./Navbar3";

const JobApplicationForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    gender: "",
    profession: "",
    degree: "",
    university: "",
    graduation: "",
    location: "",
    job: "",
    jobtype: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const email = sessionStorage.getItem("email");
        if (!email) {
          navigate("/login");
          return;
        }
        const response = await axios.get(
          `${window.API_URL}/user-info?email=${email}`
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        alert("Error fetching user information. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${window.API_URL}/apply-job`, {
        email: userInfo.email,
        jobId: job.id,
        jobTitle: job.title,
        companyName: job.company.display_name,
      });
      alert("Application submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application. Please try again.");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Navbar3 />
      <div className="job-application-container">
      <div className="job-detailss">
  <h2>{job.title}</h2>
  <div className="job-info-grid">
    <div className="job-info-item">
      <strong>Company</strong>
      <span>{job.company.display_name}</span>
    </div>
    <div className="job-info-item">
      <strong>Location</strong>
      <span>{job.location.display_name}</span>
    </div>
    <div className="job-info-item">
      <strong>Salary</strong>
      <span>£{job.salary_min.toLocaleString()} - £{job.salary_max.toLocaleString()} per year</span>
    </div>
  </div>
</div>
  
  <form onSubmit={handleSubmit} className="job-application-form">
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={userInfo.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={userInfo.profession}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={userInfo.degree}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="university">University</label>
        <input
          type="text"
          id="university"
          name="university"
          value={userInfo.university}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="graduation">Graduation Year</label>
        <input
          type="text"
          id="graduation"
          name="graduation"
          value={userInfo.graduation}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Your Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={userInfo.location}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
    <button type="submit" className="submit-button">Submit Application</button>
  </form>
</div>
    </>
  );
};

export default JobApplicationForm;
