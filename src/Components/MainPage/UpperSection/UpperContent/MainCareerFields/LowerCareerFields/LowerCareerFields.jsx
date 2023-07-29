import React from 'react';
import CareerImage from './CarrerImages/CareerImage.jsx';
import './LowerCareerFields.css'


const LowerCareerFields = () => {
  return (

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
  )
}

export default LowerCareerFields