import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Service from './Service'
import Contact from './Contact'
import Body from "./Body"
import PagenotFound from './PagenotFound'
import Resume from './Resume'
import {AnimatePresence} from "framer-motion"
import Myprojects from './Myprojects'


const AnimatedRoutes = () => {
    const location=useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
       
          <Route path='/' element={<Body/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Myprojects/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<PagenotFound/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes