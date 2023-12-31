import React, { useEffect, useState } from "react";
import "./RegistrationPage.css";
import SideNumberBar from "./SideNumberBar/SideNumberBar.jsx";
import RegistrationForms from "./RegistrationForms/RegistrationForms.jsx";
import Loader from './Loader.jsx';
import Navbar2 from "./Navbar2";


const RegistrationPage = () => {
  const [click, setClick] = useState(false);
  const [professionClick, setProfessionClick] = useState(false);
  const [eduClick, setEduClick] = useState(false);

  const [loader , setloader] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setloader(false);
    },2000)
  },[])


  function handleClick() {
    setClick(true);
  }
  function handleProfessionClick() {
    setProfessionClick(true);
  }
  function handleEduClick() {
    setEduClick(!eduClick);
  }
  console.log(professionClick);

  return (
    <>
        {
      loader ? <Loader/>
      : 
      <>
                <Navbar2/>
        <article className="registrationArticle">

        <SideNumberBar
          click={click}
          professionClick={professionClick}
          eduClick={eduClick}
        />
        <RegistrationForms
          onClick={handleClick}
          professionClick={handleProfessionClick}
          eduClick={handleEduClick}
        />
      </article>
      </>
    }
    </>
  );
};

export default RegistrationPage;
