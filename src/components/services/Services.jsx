import { useRef } from "react";
import {  motion, useInView } from "framer-motion";
import "./services.scss";
const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, {margin: "-100px"})
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
    //   animate="animate"
// whileInView="animate"
ref={ref}
animate={ "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h2>Create Front End App</h2>
          <p>
            Usually i create a front-end application such as a web app, landing page, wedding invitation website, and more. the client target is for MSMEs in local area, and i will improve to expand from default local area. 
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h2>Create Website For Company </h2>
          <p>
        Im has created a website for company furniture in Jepara City, namely is CV. RAMA CITRA INDO FURNITURE, there are focus on manufacturing products furniture to export market up to aboards.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h2>Like a Design World</h2>
          <p>
          Beside create a program, I like too a design using corel draw, therefore im like to Develop a website design, currently like the world design since still children, design is on my passion instead.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h2>Team Working Collaboration</h2>
          <p>
          I help team working collaboration, like project management, task management, and communication. I also like to help team to grow and learn, and also to help team to be more productive and efficient.
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
