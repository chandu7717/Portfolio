import React, { useState } from 'react'
import "./resume.css"
import resume from "../Resourse/resume.png"

const Resume = () => {
  let[file,setFile]=useState("download")

  let handleDownload=()=>
  {
    setFile("click here to download")
  }

  let handleDownloadOut=()=>
  {
    setFile("download")
  }
  return (
    <div id='resume'>
      <div id="imag">
        <img src={resume}alt=""  height={700} width={540}/>
      </div>

      <div id="download">
         <a href={resume} download={resume} onMouseOver={handleDownload} onMouseOut={handleDownloadOut}>
          {file}
         </a>
      </div>
    </div>
  )
}

export default Resume