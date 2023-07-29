import React, { useState } from "react";
import "./ProfessionalDetails.css";
import { useNavigate } from "react-router-dom";


const ProfessionalDetails = ({ professionClick }) => {
  const navigate = useNavigate();
  const[professionPayload,updateProfessionPayload] = useState({});
  function onchangehandler(event) {
    let id = event?.target?.id;
    let value = event?.target?.value;
    let updatedProfessionPayload = { ...professionPayload };
    updatedProfessionPayload[id] = value;
    updateProfessionPayload(updatedProfessionPayload);
  }
  function onsubmithandler(event) {
    event.preventDefault();
    navigate("/Register/educationdetailsform");
    let payloadNew = JSON.parse(sessionStorage.getItem("payload"));
    payloadNew = { ...payloadNew, ...professionPayload };
    console.log("payloadNew: ", payloadNew);
    sessionStorage.setItem("professionPayload", JSON.stringify(payloadNew));
  }
  
  return (
    <article className="professionalContainer">
      <div>
        <h1 className="professionalHeading">Professional Details</h1>
        <p className="headingPara">Help us understand you better!</p>
      </div>
      <form onSubmit={onsubmithandler}>
        <div className="checkboxDiv">
          <input type="radio" name="profession" required  id="profession" value="experienced" onChange={onchangehandler}/>
          <div>
            <h2>I am Experienced</h2>
            <p className="detailPara">
              Have experience of 2+years in the industry
            </p>
          </div>
        </div>
        <div className="checkboxDiv">
          <input type="radio" name="profession" required id="profession" value="fresher" onChange={onchangehandler} />
          <div>
            <h2>I am Fresher</h2>
            <p className="detailPara">Have no experience in the industry</p>
          </div>
        </div>
        <div className="checkboxDiv">
          <input type="radio" name="profession" required id="profession" value="student"  onChange={onchangehandler} />
          <div>
            <h2>I am Student</h2>
            <p className="detailPara">still studying in school/college</p>
          </div>
        </div>
    
          <input
            type="submit"
            className="continueBtn"
            onClick={professionClick}
            value="Continue"
          />
      </form>
    </article>
  );
};

export default ProfessionalDetails;
