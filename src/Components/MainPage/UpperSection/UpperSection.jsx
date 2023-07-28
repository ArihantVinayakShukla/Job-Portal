import React from 'react'
import './UpperSection.css'
import MainCareerFields from './MainCareerFields/MainCareerFields';
import Navbar from './Navbar/Navbar.jsx'
import UpperContent from './UpperContent/UpperContent.jsx';
const UpperSection = () => {
  return (
    <>
    <article className="upperArticle">
    <Navbar/>
    <UpperContent/>
    </article>

    <MainCareerFields/>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#E3FDE3" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,208C672,181,768,139,864,128C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
</>
  )
}

export default UpperSection