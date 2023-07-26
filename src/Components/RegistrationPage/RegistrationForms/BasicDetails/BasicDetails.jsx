import React, { useState } from "react";
import "./BasicDetails.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiUpload } from "react-icons/bi" ;

const BasicDetails = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <article className="basicDiv">
      <h1 className="form-heading">Create an account</h1>
      <form className="basicForm">
      <div className="resumeDiv">
        <p>Upload Resume</p>
        <input type="file" id="fileInput" />
        <BiUpload className="uploadIcon"/>
      </div>
      <div className="fieldContainer">
        <div className="fieldGroup">
          <label htmlFor="fullName" className="formLabel">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            autoComplete="nope"
            className="formField"
            required
          />
        </div>
        <div className="fieldGroup">
          <label htmlFor="emailId" className="formLabel">
            Email ID

          </label>
          <input
            id="emailId"
            type="email"
            placeholder="Enter Email ID"
            autoComplete="nope"
            className="formField"
            required
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
              autoComplete="nope"
              type={passwordVisible ? "text" : "password"}
              className="formField"
              required
            />
            <button className="eye-btn" type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
        </div>
        <div className="fieldGroup">
          <label className="formLabel">
            Gender 
          </label>
          <div className="genderBox">
            <div className="choiceGroupContainer">
              <label className="radioChoice">
                <input
                  id="option-0"
                  type="radio"
                  className="radioBoxField"
                  name="gender"
                  value="Male"
                  required
                />
                Male
              </label>
              <label className="radioChoice">
                <input
                  id="option-1"
                  type="radio"
                  className="radioBoxField"
                  name="gender"
                  value="Female"
                  required
                />
                Female
              </label>
              <label className="radioChoice">
                <input
                  id="option-2"
                  type="radio"
                  className="radioBoxField"
                  name="gender"
                  value="Prefer not to say"
                  required
                />
                Prefer not to say
              </label>
            </div>
          </div>
        </div>
            <button type="submit" className="continue-btn">
        <div class="continue-btn-wrapper">
          <div id="continue-btn" className="primaryBtn commonBtn continueBtn">
            <span class="cont-text">Continue</span>
          </div>
        </div>
            </button>
      </div>
            </form>
    </article>
  );
};

export default BasicDetails;