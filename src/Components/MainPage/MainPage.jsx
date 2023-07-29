import React from 'react';
import './MainPage.css'
import UpperSection from './UpperSection/UpperSection';
import MiddleSection from './MiddleSection/MiddleSection.jsx'

const MainPage = () => {
  return (
    <>
    <div className='outermostDiv'>
      <article className='mainArticle'>
          <UpperSection/>
          <MiddleSection/>
      </article>
      
    </div>
    </>
  )
}

export default MainPage