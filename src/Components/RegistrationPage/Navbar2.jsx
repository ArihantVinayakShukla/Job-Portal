import React from 'react';
import "./Navbar2.css";
import { Link } from 'react-router-dom';
const Navbar2 = () => {
  return (
    
    <section className="NavSection2">
    <h3 className='logo'>JOBIVIST</h3>
    <div className='gobackdiv'>
  <Link to="/"><button class="goback"></button></Link>
  </div>
    </section>
  )
}

export default Navbar2;