import React from 'react'
import './ProfessionalDetails.css'

const ProfessionalDetails = () => {
  return (
    <article className='professionalContainer'>
    <div>
      <h1 className='professionalHeading'>
        Professional Details
      </h1>
      <p className="headingPara">Help us understand you better!</p>
    </div>
    <form>
      <div className='checkboxDiv'>
        <input type="radio" name="profession" required/>
        <div>
        <h2>I am Experienced</h2>
        <p className='detailPara'>Have experience of 2+years in the industry</p>
        </div>
      </div>
      <div className='checkboxDiv'>
      <input type="radio" name="profession" required/>
      <div>
      <h2>I am Fresher</h2>
      <p className='detailPara'>Have no experience in the industry</p>
</div>
      </div>
      <div className='checkboxDiv'>
      <input type="radio" name="profession" required/>
      <div>
      <h2>I am Student</h2>
      <p className='detailPara'>still in school/college</p>
</div>
      </div>
      <button type="submit" className="continue-btn">
        <div class="continue-btn-wrapper">
          <div id="continue-btn" className="primaryBtn commonBtn continueBtn">
            <span class="cont-text">Continue</span>
          </div>
        </div>
            </button>
    </form>
    </article>
  )
}

export default ProfessionalDetails