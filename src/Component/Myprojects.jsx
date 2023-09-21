import React from 'react'
import "./project.css"
import {motion} from "framer-motion"

const Myprojects = () => {

  return (
    <div id='project'>
      <motion.div id="project1"
        variants={{

          hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 },
          }}
          initial= "hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
      
      >
      <a href="https://chandu7717.github.io/Todolist/" id="todoapp">
        <h1 id='pro1'>
          Project 1
        </h1>
        <p id='proname1'>
          Todo App
        </p>
      </a>
      </motion.div>

      {/* second project */}

      <motion.div id="project2"
      
      variants={{

        hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 },
        }}
        initial= "hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.50 }}
      >
      <a href="https://chandu7717.github.io/Meal_App/" id="restaurent">
        <h1 id='pro2'>
          Project 2
        </h1>
        <p id='proname1'>
          Apna restaurent
        </p>
      </a>
      </motion.div>
    </div>
  )
}

export default Myprojects