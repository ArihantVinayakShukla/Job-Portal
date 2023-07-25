import React from 'react'
import './BasicDetails.css'

const BasicDetails = () => {
  return (
    <article className='basicDiv'>
      <div className="resumeDiv">
        <p>Upload Resume</p>
        <input type="file" id="fileInput"></input>
      </div>
    </article>
  )
}

export default BasicDetails