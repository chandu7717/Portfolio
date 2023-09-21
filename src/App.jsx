import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Component/Nav'
import AnimatedRoutes from './Component/AnimatedRoutes'
const App = () => {
 
  return (
  
    <div>
      
      <Router>
         <Nav/>
         <AnimatedRoutes/>
       
      </Router>


      
      
    </div>




   
   
  
  )
}

export default App