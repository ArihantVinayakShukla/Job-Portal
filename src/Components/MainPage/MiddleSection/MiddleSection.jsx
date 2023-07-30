import React from 'react';
import UpperPart from './UpperPart/UpperPart.jsx'
import LowerPart from './LowerPart/LowerPart.jsx';
import Services from './Services/Services.jsx';
import Webinar from './Webinar/Webinar.jsx';

import "./MiddleSection.css"
const MiddleSection = () => {
  return (
    <>
      <div><UpperPart/><LowerPart/> </div>
      <div className='ser'>
        <h6>Services</h6>
        <Services/>
      </div>
      <div className='web'>
        <h6>Successful Webinar</h6>
        <Webinar />
      </div>
    </>
   
  )
}

export default MiddleSection;