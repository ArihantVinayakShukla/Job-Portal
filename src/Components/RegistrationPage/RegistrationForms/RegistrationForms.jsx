import React from 'react'
import './RegistrationForms.css'
// import BasicDetails from './BasicDetails/BasicDetails.jsx'
// import ProfessionalDetails from './ProfessionalDetails/ProfessionalDetails.jsx'
// import EducationDetails from './EducationDetails/EducationDetails.jsx'
import JobPreference from './JobPreferences/JobPreference'

const RegistrationForms = (props) => {
  return (
    <article className='form-article'>
    {/* <BasicDetails/> */}
    {/* <ProfessionalDetails/> */}
    {/* <EducationDetails/> */}
    <JobPreference/>
    </article>
  )
}

export default RegistrationForms