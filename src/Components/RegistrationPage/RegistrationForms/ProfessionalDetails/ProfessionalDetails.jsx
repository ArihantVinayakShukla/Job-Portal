import React from "react";
import "./ProfessionalDetails.css";
import { Link } from "react-router-dom";

const ProfessionalDetails = ({ professionClick }) => {
  return (
    <article className="professionalContainer">
      <div>
        <h1 className="professionalHeading">Professional Details</h1>
        <p className="headingPara">Help us understand you better!</p>
      </div>
      <form>
        <div className="checkboxDiv">
          <input type="radio" name="profession" required />
          <div>
            <h2>I am Experienced</h2>
            <p className="detailPara">
              Have experience of 2+years in the industry
            </p>
          </div>
        </div>
        <div className="checkboxDiv">
          <input type="radio" name="profession" required />
          <div>
            <h2>I am Fresher</h2>
            <p className="detailPara">Have no experience in the industry</p>
          </div>
        </div>
        <div className="checkboxDiv">
          <input type="radio" name="profession" required />
          <div>
            <h2>I am Student</h2>
            <p className="detailPara">still in school/college</p>
          </div>
        </div>
        <Link to="/educationdetailsform">
          <button
            type="submit"
            className="continueBtn"
            onClick={professionClick}
          >
            Continue
          </button>
        </Link>
      </form>
    </article>
  );
};

export default ProfessionalDetails;
