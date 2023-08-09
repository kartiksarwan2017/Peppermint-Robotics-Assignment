import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider = () => {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/hands-holding-balloons-spelling-career_53876-146852.jpg?w=2000"
          alt="First slide"
          style={{height: 500}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1333992102/vector/young-male-and-female-characters-are-trying-to-find-the-right-path-direction-and-guide-to.jpg?s=612x612&w=0&k=20&c=vOwUAnSOjP-D63Ykzx8IU_Tk3JiX5mjxjwOPznjGuN8="
          alt="Second slide"
          style={{height: 500}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/506351726/photo/recruiter-advertising-for-job-vacancies-searching-candidates-to-hire.jpg?s=612x612&w=0&k=20&c=JNtjXENGX7igzXRDCaifzEcRox2FCUPzF0hptTK3dRw="
          alt="Third slide"
          style={{height: 500}}
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default ImageSlider