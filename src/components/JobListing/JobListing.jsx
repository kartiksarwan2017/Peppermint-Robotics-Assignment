import "./JobListing.css";
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import jobListings from "../../jobslist.json";

const JobListing = () => {
  return (
    <>
      <div className="job-listing-container">
        {jobListings.map((job, index) => {
          return (
            <>
              <Card className="jobs-list-card">
                <Card.Img variant="top" src={job.jobImgUrl} className="card-img" />
                <Card.Body>
                  <Card.Title className="card-title">{job.jobTitle}</Card.Title>
                  <button className="apply-button">Apply Now</button>
                  <button className="job-description-button" >
                    <Link to={`/job-description/${job.jobId}`}>
                      Job Description
                    </Link>
                  </button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default JobListing;
