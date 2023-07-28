import React, { useState } from "react";
import "./BasicDetails.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import {  useNavigate } from "react-router-dom";

const BasicDetails = ({ onClick }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [payload, updatePayload] = useState({
    name: "",
    email: "",
    password: "",
  });
function onsubmithandler(event){
  event.preventDefault();
  sessionStorage.setItem("payload",JSON.stringify(payload));
  console.log(payload);
  navigate("/Register/professionalDetailsForm");
}

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  function onchangehandler(event) {
    let id = event?.target?.id;
    let value = event?.target?.value;
    let updatedPayload = { ...payload };
    updatedPayload[id] = value;
    updatePayload(updatedPayload);
  }
  console.log(payload);
  return (
    <article className="basicDiv">
      <h1 className="form-heading">Create an account</h1>
      <form className="basicForm" onSubmit={onsubmithandler}>
        <div className="resumeDiv">
          <p>Upload Resume</p>
          <input type="file" id="fileInput" accept="pdf" required/>
          <BiUpload className="uploadIcon" />
        </div>
        <div className="fieldContainer">
          <div className="fieldGroup">
            <label htmlFor="name" className="formLabel">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="off"
              className="formField"
              required
              onChange={onchangehandler}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="emailId" className="formLabel">
              Email ID
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email ID"
              autoComplete="off"
              className="formField"
              required
              onChange={onchangehandler}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="password" className="formLabel">
              Password
            </label>
            <div className="input-group">
              <input
                id="password"
                placeholder="Minimum 6 characters"
                autoComplete="off"
                type={passwordVisible ? "text" : "password"}
                className="formField"
                required
                onChange={onchangehandler}
              />
              <button
                className="eye-btn"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>
          <div className="fieldGroup">
            <label className="formLabel">Gender</label>
            <div className="genderBox">
              <div className="choiceGroupContainer">
                <label className="radioChoice">
                  <input
                    id="gender"
                    type="radio"
                    className="radioBoxField"
                    name="gender"
                    value="Male"
                    required
                    onChange={onchangehandler}
                  />
                  Male
                </label>
                <label className="radioChoice">
                  <input
                    id="gender"
                    type="radio"
                    className="radioBoxField"
                    name="gender"
                    value="Female"
                    required
                    onChange={onchangehandler}
                  />
                  Female
                </label>
                <label className="radioChoice">
                  <input
                    id="gender"
                    type="radio"
                    className="radioBoxField"
                    name="gender"
                    value="Prefer not to say"
                    required
                    onChange={onchangehandler}
                  />
                  Prefer not to say
                </label>
              </div>
            </div>
          </div>
        </div>
     
          <input type="submit" className="continueBtn" value = "Continue" onClick={onClick}/>        
      </form>
    </article>
  );
};

export default BasicDetails;