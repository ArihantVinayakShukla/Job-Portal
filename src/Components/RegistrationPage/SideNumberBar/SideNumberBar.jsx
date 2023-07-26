import React from "react";
import "./SideNumberBar.css";
import { AiFillCheckCircle } from "react-icons/ai"
const SideNumberBar = ({click,professionClick,eduClick}) => {
  return (
    <article className="sideNumberBarArticle">
      <section className="container">
        <div className="activeLine"></div>
        <div className="abc">{click ? 
          <div className=" completedCircle"><AiFillCheckCircle /></div>:<div className="activeCircle">1</div>}
          <h3 className="sideText activeText">Basic Details</h3>
        </div>
        {click?<div className="activeLine"></div> :<div className="line"></div>
}
<div className="abc">
      {click ? (
        professionClick ? (
          <div className="completedCircle">
            <AiFillCheckCircle />
          </div>
        ) : (
          <div className="activeCircle">2</div>
        )
      ) : (
        <div className="numberCircle">2</div>
      )}
              <h3 className="sideText">Professional Details</h3>
    </div>
        <div className="line"></div>
        <div className="abc">
          <div className="numberCircle">3</div>
          <h3 className="sideText">Education Details</h3>
        </div>
        <div className="line"></div>
        <div className="abc">
          <div className="numberCircle">4</div>
          <h3 className="sideText">Start Job Search</h3>
        </div>
      </section>
    </article>
  );
};
export default SideNumberBar;
