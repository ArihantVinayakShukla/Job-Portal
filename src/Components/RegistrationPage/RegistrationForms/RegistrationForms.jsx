import React from 'react'
import './RegistrationForms.css'
import BasicDetails from './BasicDetails/BasicDetails.jsx'
import { Routes, Route } from 'react-router-dom'
import ProfessionalDetails from './ProfessionalDetails/ProfessionalDetails.jsx'
import EducationDetails from './EducationDetails/EducationDetails.jsx'
import JobPreference from './JobPreferences/JobPreference'

const RegistrationForms = (props) => {
  return (
    <article className='form-article'>
      <Routes>
        <Route index element={<BasicDetails/>}></Route>
        <Route path="/professionalDetailsForm" element={<ProfessionalDetails/>}></Route>
        <Route path="/educationDetailsForm" element={<EducationDetails/>}></Route>
        <Route path="/jobPreferenceForm" element={<JobPreference/>}></Route>
      </Routes>
    
    </article>
  )
}

export default RegistrationForms