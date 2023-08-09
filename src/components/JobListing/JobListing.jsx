import "./JobListing.css";
import React from "react";
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
                  <Card.Title>{job.jobTitle}</Card.Title>
                  <Card.Text>{job.jobDescription}</Card.Text>
                  <button className="apply-button">Apply Now</button>
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
