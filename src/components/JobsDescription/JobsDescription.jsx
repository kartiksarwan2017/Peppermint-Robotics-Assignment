import "./JobsDescription.css";
import React from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider';
import JobsDescriptionData from "../../jobDescriptions.json";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const JobsDescription = () => {
  const { jobId } = useParams();
  const job = JobsDescriptionData.find((job) => job.jobId === jobId);
  return (
    <div className='jobs-description-container'>
      <ImageSlider />
      {job ? (
        <Card className="specific-job-details">
          <Card.Img variant="top" src={job.imgUrl} />
          <Card.Body>
            <Card.Title>{job.jobTitle}</Card.Title>
            <Card.Text>{job.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h5>Qualifications:</h5>
              <ul>
                {job.qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Responsibilities:</h5>
              <ul>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">
              <button className="apply-button">Apply Now</button>
            </Card.Link>
          </Card.Body>
        </Card>
      ) : (
        <p>Job not found.</p>
      )}

    </div>
  )
}

export default JobsDescription;