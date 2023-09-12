import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import"./Component/nav.css"

import About from './Component/About'
import Blog from './Component/Blog'
import Projects from './Component/Projects'
import Service from './Component/Service'
import Contact from './Component/Contact'
import Nav from './Component/Nav'
import Body from "./Component/Body"
import PagenotFound from './Component/PagenotFound'
const App = () => {
 
  return (
  
    <div>
      
      <Router>
      <Nav/>
        <Routes>
       
          <Route path='/' element={<Body/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<PagenotFound/>}/>
        </Routes>
      </Router>


      
      
    </div>




   
   
  
  )
}

export default App