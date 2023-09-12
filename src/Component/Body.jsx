import React, { useState } from 'react'
import'./Body.css'
import { Link } from 'react-router-dom'

const Body = () => {

    let[data,setdata]=useState("Hello..")
    let change=()=>
    {
      setdata("about")
    }
let out=()=>
{
  setdata("Hello..")
}

let[project,setproject]=useState("I am")

let projectdata=()=>
{
    setproject("Work")
}

let outproject=()=>
{
  setproject("I am")
}


let[name,setname]=useState("Chandu")

let content1=()=>
{
    setname("Contact")
}

let outdata1=()=>
{
  setname("Chandu")
}

  return (
    <div className='name'>
       <div className="content">
       <h1 onMouseOver ={change} id='about'>
         <Link to={"/about"} onMouseOver={change} onMouseOut={out}>
          {data}
         </Link>
        </h1>
        <h1 id='work'>
            <Link to={"/service"} onMouseOver={projectdata} onMouseOut={outproject}>{project}</Link>
        </h1>
        <h1 id='contact'>
            <Link to={"/contact"} onMouseOver={content1} onMouseOut={outdata1}>{name}</Link>
        </h1>
      
       </div>
    </div>
  )
}

export default Body