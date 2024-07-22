import React from 'react';
import CareerFields from './CareerFields/CareerFields';
import {HiOutlineLightBulb} from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {GiBlackHandShield} from "react-icons/gi";
import {PiCurrencyCircleDollarFill} from "react-icons/pi";
import {MdSavedSearch} from "react-icons/md";
import {RiTabletFill} from "react-icons/ri"
import "./UpperCareerField.css"

const UpperCareerField = () => {
  return (
    <>
    <div className='mainCF'>
      <div className='innerMainCF'>
            <CareerFields icon={<HiOutlineLightBulb/>} para="Mobile Applications"/>
            <CareerFields icon={<IoIosPeople/>} para="FrontEnd Developer"/>
            <CareerFields icon={<GiBlackHandShield/>} para="BackEnd Developer"/>
      </div>
      <div className='innerMainCF'>
            <CareerFields icon={<PiCurrencyCircleDollarFill/>} para="Web 3"/>
            <CareerFields icon={<MdSavedSearch/>} para="Dev Ops"/>
            <CareerFields icon={<RiTabletFill/>} para="Data Science Jobs"/>
            </div>
        </div>
    </>
  )
}

export default UpperCareerField