import React from "react";
import "./Webinar.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Webinar = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const jobPortalWebinar = [
    {
      Webinarname: "Carrer in Data Science",
      image: "https://i.ytimg.com/vi/AicgokHsxT0/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/N8fasmxxTqY/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/nJ0afCCunqM/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/pgi_RLwKb8w/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/miOJZmvOX0c/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/17fGyfbQfHQ/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/z-y_szFuMdU/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/Y5-tBLNShyo/mqdefault.jpg",
    },
    {
      Webinarname: "Masterclass in Aptitude",
      image: "https://i.ytimg.com/vi/-h5NoNm-Mfc/mqdefault.jpg",
    },
  ];

  return (
    <>
    
      <Carousel
        responsive={responsive}
          infinite
        
      >
        {jobPortalWebinar.map((webin) => {
          return (
            <div className="carousel">
              <div className="imaage">
                <img src={webin.image} alt="movie" />
              </div>
              <div className="play">
                <img
                  src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/8e24d8e9/images/home-page/play_btn.svg"
                  alt=""
                />
              </div>
              <h4>{webin.Webinarname}</h4>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Webinar;
