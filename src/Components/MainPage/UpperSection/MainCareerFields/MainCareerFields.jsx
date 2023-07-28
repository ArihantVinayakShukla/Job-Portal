import React from 'react';
import CareerFields from '../CareerFields/CareerFields';
import {HiOutlineLightBulb} from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {GiBlackHandShield} from "react-icons/gi";
import {PiCurrencyCircleDollarFill} from "react-icons/pi";
import {MdSavedSearch} from "react-icons/md";
import {RiTabletFill} from "react-icons/ri"
import "./MainCareerFields.css"
import CareerImage from '../CarrerImages/CareerImage';

const MainCareerFields  = () => {



  return (
    <>
        <div className='mainCF'>
            <CareerFields icon={<HiOutlineLightBulb/>} para="Mobile Applications"/>
            <CareerFields icon={<IoIosPeople/>} para="FrontEnd Developer"/>
            <CareerFields icon={<GiBlackHandShield/>} para="BackEnd Developer"/>
            <CareerFields icon={<PiCurrencyCircleDollarFill/>} para="Dev Ops"/>
            <CareerFields icon={<MdSavedSearch/>} para="Emerging Technologies "/>
            <CareerFields icon={<RiTabletFill/>} para="Data Science Jobs"/>
        </div>

        <div className='mainCI'>
            <div className='mainImages'>
                <CareerImage image="https://staticlogo.hirist.com/webp/python.webp" description="IOS"/>
                <CareerImage image="https://staticlogo.hirist.com/webp/reactjs.webp" description="Android"/>
                <CareerImage image="https://staticlogo.hirist.com/webp/angularjs.webp" description="React Native"/>
                <CareerImage image="https://staticlogo.hirist.com/webp/jquery.webp"  description="Ionic" />
                <CareerImage image="https://staticlogo.hirist.com/webp/bootstrap.webp" description="PhoneGap" />
                <CareerImage image="https://staticlogo.hirist.com/webp/ui.webp" description="Xamarin"/>
                <CareerImage image="https://staticlogo.hirist.com/webp/ux.webp" description="OpenGL"/>
            </div>
            <div className='career-images'>
                	<img src="https://d3qr48lsanmyop.cloudfront.net/webp/1645602975621.webp" alt="" />
                    <img src="https://d3qr48lsanmyop.cloudfront.net/webp/1645605066676.webp" alt="" />
                    <img src="https://d3qr48lsanmyop.cloudfront.net/webp/1649229398701.webp" alt="" />
                    <img src="https://d3qr48lsanmyop.cloudfront.net/webp/1669635320253.webp" alt="" />
                    <img src="https://d3qr48lsanmyop.cloudfront.net/webp/1683894373471.webp" alt="" />
                    <img src="https://d3qr48lsanmyop.cloudfront.net/webp/1688707219954.webp" alt="" />
            </div>
        </div>
    </>
  )
}

export default MainCareerFields