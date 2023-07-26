import React ,{useState} from "react";
import './JobPreference.css'
import Select from "react-select";

function JobPreference(){
    const [selectedOptions, setSelectedOptions] = useState();

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
return(
     <article className="jobContainer">
        <div>
    <h1 className='jobHeading'>
      Job Preferences
    </h1>
    <p className="jobHeadingPara">Helps to find better matching jobs</p>
    </div>
    <form className="basicForm">
        <div className="fieldGroup">
        <label  className="heading">
            Preferred Location
          </label>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select Locations"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
          required
        />
      </div>
    </div>
    <div className="fieldGroup">
        <h2 className="heading">What are you currently looking for?</h2>
      <div className="twoDiv">
    <div className='checkboxDiv'>
        <input type="radio" name="profession" required/>
        <div>
        <h2 className="value">Freshers Job</h2>
        </div>
      </div>
      <div className='checkboxDiv'>
        <input type="radio" name="profession" required/>
        <div>
        <h2 className="value">Internship</h2>
        </div>
      </div>
      </div>
      </div>
      <div className="fieldGroup">
      <h2 className="heading">Job type</h2>
      <div className="twoDiv">
      <div className="checkboxDiv">
        <input type="radio" name="typejob" required></input>
        <div>
            <h2 className="value">Full time</h2>
        </div>
      </div>
      <div className="checkboxDiv">
        <input type="radio" name="typejob" required></input>
        <div>
            <h2 className="value">Part time</h2>
        </div>
      </div>
      </div>
      </div>
      <button type="submit" className="continue-btn">
        <div class="continue-btn-wrapper">
          <div id="continue-btn" className="primaryBtn commonBtn continueBtn">
            <span class="cont-text">Job Hunt!</span>
          </div>
        </div>
        </button>
    </form>
    </article>
)
}
export default JobPreference;