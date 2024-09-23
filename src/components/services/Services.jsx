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
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            pariatur sed minus, in porro esse quas blanditiis cumque maxime
            asperiores reiciendis ratione exercitationem recusandae ipsam
            voluptas laboriosam quasi hic fugiat!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h2>Title aaaaaaad dfafdac accsq dascs </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            pariatur sed minus, in porro esse quas blanditiis cumque maxime
            asperiores reiciendis ratione exercitationem recusandae ipsam
            voluptas laboriosam quasi hic fugiat!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            pariatur sed minus, in porro esse quas blanditiis cumque maxime
            asperiores reiciendis ratione exercitationem recusandae ipsam
            voluptas laboriosam quasi hic fugiat!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            pariatur sed minus, in porro esse quas blanditiis cumque maxime
            asperiores reiciendis ratione exercitationem recusandae ipsam
            voluptas laboriosam quasi hic fugiat!
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
