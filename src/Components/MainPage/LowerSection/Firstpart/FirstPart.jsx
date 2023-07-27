import React from 'react';
import "./FirstPart.css";
import CarrierFields from './CarrierFields/CarrierFields';
import {TbBulbOff} from "react-icons/tb";

const FirstPart = () => {

  const pro = [
    {icons : <TbBulbOff/> , headi:"Mobile Applications"},
    {}
  ]
  return (
    <div>
        <div className='first-part'>
            <CarrierFields/>
        </div>

    </div>
  )
}

export default FirstPart