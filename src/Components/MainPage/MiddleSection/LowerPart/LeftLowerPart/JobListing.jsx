import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./JobListing.css";
import { BsBuilding, BsClock, BsArrowRight } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";

const JobCard = ({ job, handleApplyClick }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => setExpanded(!expanded);

  return (
    <div className="job-card">
      <div className="job-card-header">
        <h2>{job.title}</h2>
        <span className="company-name">{job.company.display_name}</span>
      </div>
      <div className="job-details">
        <p>
          <BsClock /> {job.contract_time || "Full Time"}
        </p>
        <p>
          <BsBuilding /> {job.location.display_name}
        </p>
      </div>
      <div className="job-description-container">
        <p className={`job-description ${expanded ? "expanded" : ""}`}>
          <MdOutlineDescription />
          {job.description}
        </p>
        <button className="read-more-btn" onClick={toggleDescription}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
      <button className="apply-btn" onClick={() => handleApplyClick(job)}>
        Apply Now <BsArrowRight />
      </button>
    </div>
  );
};

const JobListing = ({ selectedJobs, authenticatedUser, setlogin, loginRef }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [defaultFetched, setDefaultFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [scrollTrigger, setScrollTrigger] = useState(false);

  const navigate = useNavigate();

  const jobsPerPage = 18;
  const jobListRef = useRef(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobTitles =
          selectedJobs.length > 0
            ? selectedJobs.map((job) => job.label).join("%20")
            : "developer";

        const response = await axios.get(
          `https://api.adzuna.com/v1/api/jobs/gb/search/${currentPage}?app_id=16d16a7a&app_key=a55f4f45ab1cecc9c1986fd6a04cf3c8&what_or=${jobTitles}&results_per_page=${jobsPerPage}`
        );

        setJobs(response.data.results);
        setTotalPages(Math.ceil(response.data.count / jobsPerPage));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [selectedJobs, currentPage]);

  useEffect(() => {
    if (!defaultFetched && selectedJobs.length === 0) {
      setDefaultFetched(true);
    }
  }, [selectedJobs, defaultFetched]);

  useEffect(() => {
    if (scrollTrigger && jobListRef.current) {
      setTimeout(() => {
        jobListRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setScrollTrigger(false);
      }, 800);
    }
  }, [scrollTrigger]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (selectedJobs.length > 0) {
      setScrollTrigger(true);
    }
  }, [selectedJobs]);

  const handleApplyClick = (job) => {
    if (authenticatedUser) {
      navigate(`/apply/${job.id}`, { state: { job } });
    } else {
      setlogin(true);
      if (loginRef && loginRef.current) {
        loginRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="job-listings-container">
      <h1>Top Job Picks</h1>
      <div className="job-listings" ref={jobListRef}>
        {isLoading ? (
          <p>Loading...</p>
        ) : jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobCard key={index} job={job} handleApplyClick={handleApplyClick} />
          ))
        ) : (
          <p className="warning">No jobs available</p>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobListing;
