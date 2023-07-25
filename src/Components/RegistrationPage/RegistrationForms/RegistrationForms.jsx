import React from 'react'
import './RegistrationForms.css'
import BasicDetails from './BasicDetails/BasicDetails.jsx'

const RegistrationForms = () => {
  return (
    <article className='form-article'>
    <h1 className='form-heading'>Create an account</h1>
    <BasicDetails/>
    </article>
  )
}

export default RegistrationForms