import React from "react";
import "./EducationDetails.css";
import { Link } from "react-router-dom";

const EducationDetails = ({ eduClick }) => {
  return (
    <article className="eduContainer">
      <div>
        <h1 className="eduHeading">Education Details</h1>
        <p className="eduHeadingPara">
          Tell recruiters about your educational qualifications
        </p>
      </div>
      <form className="basicForm">
        <div className="fieldContainer">
          <div className="fieldGroup">
            <label htmlFor="fullName" className="formLabel">
              Highest Qualification
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your Degree"
              autoComplete="nope"
              className="formField"
              required
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="emailId" className="formLabel">
              University/Institute
            </label>
            <input
              id="emailId"
              type="email"
              placeholder="Enter Your Institute name"
              autoComplete="nope"
              className="formField"
              required
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="emailId" className="formLabel">
              Year of Graduation
            </label>
            <input
              id="emailId"
              type="email"
              placeholder="Enter the year of graduation"
              autoComplete="nope"
              className="formField"
              required
            />
          </div>
          <Link to="/jobPreferenceForm">
            <button type="submit" className="continueBtn" onClick={eduClick}>
              Continue
            </button>
          </Link>
        </div>
      </form>
    </article>
  );
};

export default EducationDetails;
