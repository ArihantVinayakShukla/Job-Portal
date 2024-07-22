import React, { useState } from "react";
import "./Search.css";
import Select from "react-select";

const Search = ({ onFiltersChange }) => {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const jobList = [
    { value: "frontend_react_developer", label: "Frontend React Developer" },
    { value: "backend_developer", label: "Backend Developer" },
    { value: "senior_frontend_developer", label: "Senior Frontend Developer" },
    { value: "lead_frontend_developer", label: "Lead Frontend Developer" },
    { value: "frontend_developer", label: "Frontend Developer" },
    { value: "contract_lead_frontend_developer", label: "Contract Lead Frontend Developer" },
    { value: "senior_business_development_manager", label: "Senior Business Development Manager (Employment Service)" },
    { value: "senior_devops_engineer", label: "Senior DevOps Engineer" },
    { value: "software_developer", label: "Software Developer" },
    { value: "senior_express_react_developer", label: "Senior Express/React Developer" },
    { value: "senior_full_stack_php_developer", label: "Senior Full Stack PHP Developer - Remote Working" },
    { value: "senior_full_stack_developer", label: "Senior Full Stack Developer" },
    { value: "frontend_architect", label: "Frontend Architect" },
    { value: "junior_software_developer", label: "Junior Software Developer" },
    { value: "lead_software_developer", label: "Lead Software Developer" },
    { value: "backend_engineer", label: "Backend Engineer" }
  ];
  function handleJobSelect(data) {
    setSelectedJobs(data);
    onFiltersChange(data, selectedJobs);
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "100%",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#34c759"
        : state.isFocused
        ? "#e5e5e5"
        : "white",
      color: state.isSelected ? "white" : "black",
      cursor: "pointer",
    }),
  };

  return (
    <div className="search-con">
      <div className="btnLessDiv">
        <div className="search">
          <Select
            options={jobList}
            placeholder="Select Jobs"
            value={selectedJobs}
            onChange={handleJobSelect}
            isSearchable={true}
            styles={customStyles}
            required
            id="job"
            isMulti
          />
        </div>
      </div>

    </div>
  );
};

export default Search;
