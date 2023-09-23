import React, { useState } from 'react'
import'./Body.css'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import image from "../Resourse/myImage.jpg"


const Body = () => {

    let[data,setdata]=useState("Hello..")
    let change=()=>
    {
      setdata("about..")
    }
let out=()=>
{
  setdata("Hello..")
}

let[project,setproject]=useState("I am")

let projectdata=()=>
{
    setproject("project")
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
    <motion.div className='name'>
      <motion.div id="image"
       variants={{

        hidden: { opacity: 0, y: 200 }, visible: { opacity: 1, y: 0 },
        }}
        initial= "hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      
      >
        <img src={image} alt=""  height={750} width={530}/>
      </motion.div>
       <motion.div className="content">

{/* first heading */}
       <motion.h1 onMouseOver ={change} id='about'
       variants={{

        hidden: { opacity: 0, y: 200 }, visible: { opacity: 1, y: 0 },
        }}
        initial= "hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
       >
         <Link to={"/about"} onMouseOver={change} onMouseOut={out} style={{color:"red"}}>
          {data}
         </Link>
        </motion.h1>

  {/* Work heading  */}
        <motion.h1 id='work'
        variants={{

          hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0 },
          }}
          initial= "hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.50 }}
        >
            <Link to={"/projects"} onMouseOver={projectdata} onMouseOut={outproject}>{project}</Link>
        </motion.h1>

  {/* Contact heading */}
        <motion.h1 id='contact'
        variants={{

          hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 },
          }}
          initial= "hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.75 }}
        
        >
            <Link to={"/contact"} onMouseOver={content1} onMouseOut={outdata1}>{name}</Link>
        </motion.h1>
       </motion.div>
    </motion.div>
  )
}

export default Body