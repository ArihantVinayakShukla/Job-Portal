import React from 'react';
import './MainPage.css'
import UpperSection from './UpperSection/UpperSection';
import FirstPart from './LowerSection/Firstpart/FirstPart';

const MainPage = () => {
  return (
    <>
    <div className='outermostDiv'>
      <article className='mainArticle'>
          <UpperSection/>
          
      </article>
      
    </div>
    </>
  )
}

export default MainPage