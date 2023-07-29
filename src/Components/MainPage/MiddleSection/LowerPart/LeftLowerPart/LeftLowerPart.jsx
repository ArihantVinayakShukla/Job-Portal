import React from 'react';
import "./LeftLowerPart.css"
import {BsClockHistory} from "react-icons/bs"
import {PiBuildingsLight} from "react-icons/pi"
import {PiSuitcaseSimpleDuotone} from "react-icons/pi"
const LeftLowerPart = ({jobTitle ,  companyName , jobType , jobLogo ,jobExperience}) => {
  return (
    <>
      <article className='leftlower'>
        
          <div className='joblogo'>
            <img src={jobLogo} alt="" />
          </div>
          <h1>{jobTitle}</h1>
         
          <div className='jobdescription'>

              <div className='cname'>
                <PiBuildingsLight/>
                <h2>{companyName}</h2>
              </div>

              <div className='expJob'>
                <PiSuitcaseSimpleDuotone/>
                <h3>{jobExperience}</h3>
              </div>

              <div className='typejob'>
                <BsClockHistory/>
                <h3>{jobType}</h3>

              </div>

          
        </div>
          <button>Apply</button>

        
      </article>
    </>
  )
}

export default LeftLowerPart;