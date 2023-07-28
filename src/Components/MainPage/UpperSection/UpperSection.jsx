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
    <MainCareerFields/>
    </article>
 
  
</>
  )
}

export default UpperSection