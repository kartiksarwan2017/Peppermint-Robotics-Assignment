import "./JobsOpenings.css";
import React from "react";
import JobListing from "../JobListing/JobListing";


const JobsOpenings = () => {
  return (
    <>
      <section className="job-listings">
        <header className="header">
          <h1>Join Our Team</h1>
          <p>Exciting career opportunities await you</p>
        </header>
        <h2>Current Job Openings</h2>
        <JobListing />
      </section>
    </>
  );
};

export default JobsOpenings;
