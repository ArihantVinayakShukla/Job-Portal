import React ,{useState}from 'react';
import './RegistrationPage.css'
import SideNumberBar from './SideNumberBar/SideNumberBar.jsx'
import RegistrationForms from './RegistrationForms/RegistrationForms.jsx'

const RegistrationPage = () => {

  const[click,setClick] = useState(false);
  const[professionClick,setProfessionClick] = useState(false);
  const[eduClick,setEduClick] = useState(false);
  function handleClick(){
    setClick(!click);
  }
  function handleProfessionClick(){
    setProfessionClick(!professionClick);
  }
  function handleEduClick(){
    setEduClick(!eduClick);
  }
  console.log(professionClick);

  return (
    <article className='registrationArticle'>
    <SideNumberBar click={click}  professionClick = {handleProfessionClick} eduClick = {handleEduClick}/>
    <RegistrationForms onClick = {handleClick} professionClick = {handleProfessionClick} eduClick = {handleEduClick}/>
    </article>
  )
}

export default RegistrationPage