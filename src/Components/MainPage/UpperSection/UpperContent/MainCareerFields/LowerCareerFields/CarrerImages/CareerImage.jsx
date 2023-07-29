import React from "react";
import "./CareerImage.css"

const CareerImage = ({image,description}) => {
    return(
        <div className="careerImage">
            <img src={image} alt="" />
            <div className="textcontent">
                <div>{description}</div>
            </div>
        </div>
    )
}

export default CareerImage;