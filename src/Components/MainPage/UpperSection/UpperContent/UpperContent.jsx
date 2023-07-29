import React from "react";
import './UpperContent.css';
import SearchBar from './Search/Search.jsx';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import MainCareerFields from './MainCareerFields/MainCareerFields.jsx'
const UpperContent = () => {

    const [text] = useTypewriter({
        words:[
            "Software Engineer",
            "Web Developer",
            "Data Scientist",
            "DevOps Engineer",
            "Cybersecurity Analyst",
            "UI/UX Designer",
            "Machine Learning Engineer",
            "Network Administrator",
            "Product Manager",
            "Full Stack Developer",
          ],
          loop:{},
          typeSpeed: 50,
          deleteSpeed: 70
    })

  return (
    <div className="upperContentContainer">
      <h1 className="hiredHeading">Get Hired As</h1>
      <span className="typingText">{text}<Cursor className="cursor"/></span>
      <SearchBar/>
    <MainCareerFields/>
    </div>
  );
};

export default UpperContent;
