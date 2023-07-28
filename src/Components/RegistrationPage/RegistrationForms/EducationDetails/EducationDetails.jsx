import React, { useState } from "react";
import "./EducationDetails.css";
import {  useNavigate } from "react-router-dom";
const EducationDetails = ({ eduClick }) => {
  const [educationPayload,updateeducationPayload] = useState({degree:"",university:"",graduation:""});
  const navigate = useNavigate();
  function onsubmithandler(event) {
    event.preventDefault();
    navigate("/Register/jobPreferenceform");
    let payloadNew = JSON.parse(sessionStorage.getItem("professionPayload"));
    payloadNew = { ...payloadNew, ...educationPayload };
    console.log("payloadNew: ", payloadNew);
    sessionStorage.setItem("educationPayload", JSON.stringify(payloadNew));
  }
  
  function onchangehandler(event) {
    let id = event?.target?.id;
    let value = event?.target?.value;
    let updatedEducationPayload = { ...educationPayload };
    updatedEducationPayload[id] = value;
    updateeducationPayload(updatedEducationPayload);
  }
  return (
    <article className="eduContainer">
      <div>
        <h1 className="eduHeading">Education Details</h1>
        <p className="eduHeadingPara">
          Tell recruiters about your educational qualifications
        </p>
      </div>
      <form className="basicForm" onSubmit={onsubmithandler}>
        <div className="fieldContainer">
          <div className="fieldGroup">
            <label htmlFor="fullName" className="formLabel">
              Highest Qualification
            </label>
            <input
              id="degree"
              type="text"
              placeholder="Enter your Degree"
              autoComplete="nope"
              className="formField"
              required
              onChange={onchangehandler}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="emailId" className="formLabel">
              University/Institute
            </label>
            <input
              id="university"
              type="text"
              placeholder="Enter Your Institute name"
              autoComplete="nope"
              className="formField"
              required
              onChange={onchangehandler}
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="emailId" className="formLabel">
              Year of Graduation
            </label>
            <input
              id="graduation"
              type="number"
              placeholder="Enter the year of graduation"
              autoComplete="nope"
              className="formField"
              required
              onChange={onchangehandler}
            />
          </div>
            <input type="submit" className="continueBtn" onClick={eduClick} value="Continue"/>
        </div>
      </form>
    </article>
  );
};

export default EducationDetails;