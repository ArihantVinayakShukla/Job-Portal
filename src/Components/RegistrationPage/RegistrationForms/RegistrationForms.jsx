import React from 'react'
import './RegistrationForms.css'
// import BasicDetails from './BasicDetails/BasicDetails.jsx'
// import ProfessionalDetails from './ProfessionalDetails/ProfessionalDetails.jsx'
import EducationDetails from './EducationDetails/EducationDetails.jsx'

const RegistrationForms = (props) => {
  return (
    <article className='form-article'>
    {/* <BasicDetails/> */}
    {/* <ProfessionalDetails/> */}
    <EducationDetails/>
    </article>
  )
}

export default RegistrationForms