import React, { useState } from 'react'
import "./about.css"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const About = () => {
  let[sign,setSign]=useState("Chandu.")
  let handleChange=()=>
  {
    setSign("Chandu.Works")
  }

  let handleOut=()=>
  {
    setSign("Chandu.")
  }
  return (
    <div id='abou'>

      <div className="data">
        <motion.h1
         variants={{

          hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 },
          }}
          initial= "hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
        
        >
          I design & build 
        </motion.h1>
        <motion.h1
         variants={{

          hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 },
          }}
          initial= "hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
        
        >
          good websites
        </motion.h1>
      </div>
      <motion.div id="sign"
      variants={{

        hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 },
        }}
        initial= "hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      
      >
        <Link to={"/"}>
            <p onMouseOver={handleChange} onMouseOut={handleOut}>
             {sign}
            </p>
        </Link>
      </motion.div>

      <div id="aboutme">
        <h1>
           About
        </h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia iure autem velit blanditiis, alias accusantium assumenda exercitationem ea est nam mollitia, corrupti minima laboriosam, laborum animi veniam voluptate asperiores commodi.
        Nesciunt eligendi, quaerat fugiat voluptatibus qui accusamus omnis eaque quis earum officia iusto quidem odit inventore, illo adipisci expedita autem aliquid, impedit doloribus ipsa dolore ullam voluptatem similique! Optio, totam?
        Quam voluptates tempore saepe voluptas maiores cumque consequuntur minima error, omnis ad suscipit voluptatem delectus. Ullam dolores ea quo magnam commodi porro ut nulla similique? Labore dolor magni adipisci officia.
        Doloremque, neque laboriosam. Autem corrupti nam aut beatae rerum, corporis omnis veniam voluptatibus in sunt vitae adipisci odio natus reiciendis illum illo quaerat fugiat fugit iure velit pariatur ratione earum?
        Sint velit vero hic cum architecto optio, laudantium nobis voluptate! Architecto iure numquam molestiae fugit officia voluptatibus, aliquid ad reiciendis, tempora saepe distinctio qui, harum accusamus veniam maiores nisi sit?
        Dignissimos porro vel consequuntur praesentium quas, quia harum nemo natus non amet autem doloremque eveniet ratione velit veritatis, nostrum aperiam quisquam eum. Minima quibusdam aliquid, commodi veniam incidunt quasi sapiente!
        Asperiores facere veniam ipsum nostrum reiciendis laboriosam unde at, iste consequuntur molestias beatae quis perspiciatis animi architecto nobis ratione dicta. Labore quod optio minus alias vel vero atque eligendi animi.
        Rerum corrupti amet iure deleniti soluta! Sapiente alias doloremque quae tempore, fuga fugit eum vitae, quasi sit cupiditate neque nam perspiciatis sunt blanditiis adipisci officia inventore vel magnam magni culpa!
        Soluta labore voluptatum iusto distinctio, quidem, totam officia enim impedit beatae expedita, culpa neque. Earum, iure odit nisi porro illo facilis ipsum consequatur neque laboriosam. Quis ipsa earum a fugit.
        Porro tempore ea quia perspiciatis, veniam sed esse omnis iusto officiis doloribus nam magnam reiciendis deleniti ratione quibusdam dolore dolores minima ut impedit quos! At molestias voluptate voluptatem inventore vel!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos consequuntur natus corrupti perspiciatis. Ab, dolorem quis quia vel ipsum minus repellendus molestias eius, excepturi quas, iure amet dolor nihil!
        Dicta soluta officiis quia facilis a ut placeat dolores, vel iure obcaecati assumenda impedit natus repudiandae rerum adipisci, dolorem suscipit exercitationem dolor. Accusantium, sunt fuga! Hic numquam nostrum cum perferendis.
        Tenetur placeat iure doloremque necessitatibus suscipit exercitationem, at quas, doloribus odio natus cum reprehenderit modi eveniet, ex ut aliquam sequi nulla laudantium veritatis. Accusantium, expedita ipsa consectetur error architecto natus.
        Dolorem tempora optio perferendis voluptas saepe quod ea doloribus omnis. Minima maiores ducimus inventore deserunt necessitatibus eos ab deleniti adipisci optio? Reprehenderit sed perferendis quis veniam, nostrum dicta obcaecati doloribus!
        Impedit reprehenderit vitae eius itaque odit debitis dolores, asperiores dolorem tempora explicabo minima voluptatem ut. Eum, possimus esse corrupti facere vero nobis, incidunt odio obcaecati veniam, consequuntur id molestiae officia?
        Reiciendis est, ipsam quod ea, natus molestiae, dolorem nostrum excepturi soluta ullam impedit? Velit, animi? Enim quia iusto possimus expedita harum illo, blanditiis est ipsa corrupti quidem, nemo, adipisci libero?
        Voluptatibus sed adipisci porro soluta magnam vero itaque eos repellat libero minima quod ut praesentium natus sint, perferendis illum numquam laborum fugiat vitae nam placeat reiciendis labore ab possimus! Quam.
        Quis, quo quam a repellat necessitatibus nulla! Delectus recusandae dolorem assumenda voluptatibus possimus quisquam perferendis suscipit consequuntur magni corrupti, voluptates, cupiditate dolor quaerat fugit consequatur debitis corporis, porro a commodi.
        Facilis unde ipsum, consequatur voluptate repellat necessitatibus distinctio fuga. Facere officia soluta expedita, perferendis ab nobis impedit nesciunt et debitis eveniet quod explicabo voluptatum quas incidunt. Odio placeat beatae at.
        Esse eum cum sunt nesciunt similique! Enim ab temporibus hic expedita voluptate nesciunt, excepturi aperiam qui quas quos quo? Omnis fugit quasi architecto neque perferendis, debitis eius officiis veritatis est!
      </div>


    </div>
  )
}

export default About