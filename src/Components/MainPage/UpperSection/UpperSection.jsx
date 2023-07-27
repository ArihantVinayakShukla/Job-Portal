import React from 'react'
import './UpperSection.css'
import Navbar from './Navbar/Navbar.jsx'
import UpperContent from './UpperContent/UpperContent.jsx'

const UpperSection = () => {
  return (
    <article className="upperArticle">
    <Navbar/>
    <UpperContent/>
    </article>
  )
}

export default UpperSection