import React from "react";
import "./LeftLowerPart.css";
import { BsClockHistory } from "react-icons/bs";
import { PiBuildingsLight } from "react-icons/pi";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
const LeftLowerPart = ({
  jobTitle,
  companyName,
  jobType,
  jobLogo,
  jobExperience,
}) => {
  return (
    <>
      <article className="leftlower">
        <div className="joblogo">
          <img src={jobLogo} alt="" />
        </div>
        <div className="descWithBtn">
          <div className="descWithHeading">
            <h2>{jobTitle}</h2>

            <div className="jobdescription">
              <div className="cname">
                <PiBuildingsLight />
                <h3>{companyName}</h3>
              </div>

              <div className="expJob">
                <PiSuitcaseSimpleDuotone />
                <h3>{jobExperience}</h3>
              </div>

              <div className="typejob">
                <BsClockHistory />
                <h3>{jobType}</h3>
              </div>
            </div>
          </div>
          <div className="jobBtnDiv">
            <button className="jobBtn">Apply</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default LeftLowerPart;
