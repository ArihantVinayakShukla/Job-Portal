import React from 'react';
import './MainPage.css'
import UpperSection from './UpperSection/UpperSection';
import MiddleSection from './MiddleSection/MiddleSection.jsx';
import Loader from '../RegistrationPage/Loader';
import {useState , useEffect} from "react";
import Footer from './Footer/Footer';

const MainPage = () => {

  
  const [loader , setloader] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setloader(false);
    },2000)
  },[])
  return (
    <>

    {
      loader ? <Loader/>:
    
      <div className='outermostDiv'>
        <article className='mainArticle'>
            <UpperSection/>
            <MiddleSection/>
        </article>

      <Footer/>
        
      </div>
    }
    </>
  )
}

export default MainPage