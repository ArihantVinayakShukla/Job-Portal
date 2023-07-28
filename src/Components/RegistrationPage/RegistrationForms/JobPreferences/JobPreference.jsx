import React, { useState } from "react";
import "./JobPreference.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function JobPreference() {
  const [jobPayload,updatejobPayload] = useState({location:"",job:"",jobtype:""});
  const [selectedOptions, setSelectedOptions] = useState();
  const navigate = useNavigate();

  function onsubmithandler(event) {
  event.preventDefault();
  let payloadNew = JSON.parse(sessionStorage.getItem("educationPayload"));
  payloadNew = { ...payloadNew, ...jobPayload };
  console.log("payloadNew: ", payloadNew);
  sessionStorage.setItem("jobPayload", JSON.stringify(payloadNew));

  const url = `${window.API_URL}/user`;
    console.log('url: ', url);

    axios.post(url, payloadNew)
      .then((res) => {
        if (res?.status === 200) {
          alert(res?.data?.msg);
          navigate("/");
        } else {
          alert(res?.data?.msg);
        }
      })
      .catch((err) => {
        alert(err?.response?.data?.msg);
      });
}

  function onchangehandler(event) {
    let id = event?.target?.id;
    let value = event?.target?.value;
    let updatedJobPayload = { ...jobPayload };
    updatedJobPayload[id] = value;
    updatejobPayload(updatedJobPayload);
  }

  // Array of all options
  const optionList = [
    { value: "banglore", label: "Banglore" },
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "Noida", label: "Noida" },
    { value: "pune", label: "Pune" },
    { value: "agra", label: "Agra" },
    { value: "ghaziabad", label: "Ghaziabad" },
    { value: "jaipur", label: "Jaipur" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "gurugram", label: "GuruGram" },
  ];
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <article className="jobContainer">
      <div>
        <h1 className="jobHeading">Job Preferences</h1>
        <p className="jobHeadingPara">Helps to find better matching jobs</p>
      </div>
      <form className="basicForms" onSubmit={onsubmithandler}>
        <div className="fields">
          <label className="heading">Preferred Location</label>
          <div className="dropdown-container">
            <Select
              options={optionList}
              placeholder="Select Locations"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
              required
              id="location"
            />
          </div>
        </div>
        <div className="fieldGroup">
          <h2 className="heading">What are you currently looking for?</h2>
          <div className="twoDiv">
            <div className="checkboxDi">
              <input type="radio" name="profession" id="job" value="freshers-job"          onChange = {onchangehandler} required />
              <div>
                <h2 className="value">Freshers Job</h2>
              </div>
            </div>
            <div className="checkboxDi">
              <input type="radio" name="profession" id ="job" value="internship"         onChange = {onchangehandler} required />
              <div>
                <h2 className="value">Internship</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="fieldGroup">
          <h2 className="heading">Job type</h2>
          <div className="twoDiv">
            <div className="checkboxDi">
              <input type="radio" name="typejob" required id="jobtype" value="full-time"         onChange = {onchangehandler}></input>
              <div>
                <h2 className="value">Full time</h2>
              </div>
            </div>
            <div className="checkboxDi">
              <input type="radio" name="typejob" required id="jobtype" value="part-time"         onChange = {onchangehandler}></input>
              <div>
                <h2 className="value">Part time</h2>
              </div>
            </div>
          </div>
        </div>
          <input type="submit" value="Job Hunt!" className="continueBtn"/>
      </form>
    </article>
  );
}
export default JobPreference;
