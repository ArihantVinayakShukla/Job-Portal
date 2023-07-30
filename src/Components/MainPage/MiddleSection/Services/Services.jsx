import React from 'react';
import "./Services.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FiArrowRight} from "react-icons/fi"

const Services = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

    const jobPortalServices = [
        {
          serviceName: "Premium Membership",
          description: "How to attend an interview confidently? Is there a sceret?",
          image: "https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/8e24d8e9/images/home-page/premium_img.svg"
        },
        {
          serviceName: "Placement Paper",
          description: "Here is the chance you can learn, Practice & Improve your skills",
          image: "https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/8e24d8e9/images/home-page/placement_paper_icon.svg"
        },
        {
          serviceName: "Interview Grooming",
          description: "How to attend an interview confidently? Is there a sceret?",
          image: "https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/8e24d8e9/images/home-page/interview_groming_icon.svg"
        },
        {
          serviceName: "Interview Grooming",
          description: "How to attend an interview confidently? Is there a sceret?",
          image: "https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/8e24d8e9/images/home-page/interview_groming_icon.svg"
        },
        {
          serviceName: "Interview Grooming",
          description: "How to attend an interview confidently? Is there a sceret?",
          image: "https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/8e24d8e9/images/home-page/interview_groming_icon.svg"
        },
        {
          serviceName: "Interview Grooming",
          description: "How to attend an interview confidently? Is there a sceret?",
          image: "https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/8e24d8e9/images/home-page/interview_groming_icon.svg"
        },
      ];



  return (
    <Carousel className='caro'
        responsive={responsive}
        
    >
    {jobPortalServices.map((service, index) => (
      <div key={index} className='slidr'>
        <div className='service-Image'>
        <img src={service.image} />
        </div>
        <div className='Service-description'>
          <h3>{service.serviceName}</h3>
          <p>{service.description}</p>
        </div>
        <div className='service-btn'>
            <button>Know More</button>
            <FiArrowRight/>
        </div>
      </div>
    ))}
  </Carousel>
  
  )
}

export default Services