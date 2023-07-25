import React from 'react'
import './RegistrationPage.css'
import SideNumberBar from './SideNumberBar/SideNumberBar.jsx'
import RegistrationForms from './RegistrationForms/RegistrationForms.jsx'

const RegistrationPage = () => {
  return (
    <article className='registrationArticle'>
    <SideNumberBar/>
    <RegistrationForms/>
    </article>
  )
}

export default RegistrationPage