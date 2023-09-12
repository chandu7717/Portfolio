import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    
        <nav>
            <div className="logo">
                <img src="" alt="" height={"70px"} width={"50px"}/>
            </div>
            <div className="info">
                <ol>
                    <li>
                        <Link to={"/"}>
                           Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>
                           Projects
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                          About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/blog"}>
                          Blog
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