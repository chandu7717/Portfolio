import React from 'react'
import"./nav.css"
import logo from "../Resourse/Logo.png"

import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    
        <nav>
            <div className="logo">
                <img src={logo} alt="" height={"80px"} width={"80px"}/>
            </div>
            <div className="info">
                <ol>
                    <li>
                        <Link to={"/"}>
                           Home
                        </Link>
                    </li>
                
                    <li>
                        <Link to={"/about"}>
                          About
                        </Link>
                    </li>

                    <li>
                        <Link to={"/projects"}>
                           Projects
                        </Link>
                    </li>
                    <li>
                        <Link to={"/resume"}>
                          Resume
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                          Contact
                        </Link>
                    </li>
                </ol>
            </div>
        </nav>
  )
}

export default Nav