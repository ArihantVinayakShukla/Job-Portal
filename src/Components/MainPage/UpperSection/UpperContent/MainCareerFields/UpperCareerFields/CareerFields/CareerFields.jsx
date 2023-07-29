import React from 'react';
import "./CareerFields.css"


const CareerFields = ({icon , para}) => {
    
    
  return (
    
        <div className='carrierFieldItems'>
            
            <div>

                {icon}
            </div>
            <div>

            
                <p>{para}</p>
            </div>
          
        </div>
    
  )
}

export default CareerFields