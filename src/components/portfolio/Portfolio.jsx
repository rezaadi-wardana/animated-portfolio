import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Website Company Profile",
    img: "./porto1.png",
    desc: "The website company profile is a cooperation job with our development project appliction in Polytechnic Balekambang.",
    link: "https://ramacitraindofurniture.com/"
  },
  {
    id: 2,
    title: "Wedding Invitation",
    img: "./porto4.png",
    desc: "It is an Independency business service to creating wedding invitation via website, for wedding events.",
    link: "https://invitationcard.ramacitraindofurniture.com/"
  },
  {
    id: 3,
    title: "MSME Landing Page",
    img: "./porto2.png",
    desc: "The MSME landing page in order to david print ballon, the MSME is focused on printing a ballon stick online service.",
    link: "https://davidprint.ramacitraindofurniture.com/"
  },
  {
    id: 4,
    title: "Website Management Resto",
    img: "./porto3.png",
    desc: "TNT Kebab Burger Resto is target to create this website, resto is a once MSME either has created products by me.",
    link: "https://kebabtnt.ramacitraindofurniture.com/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: [ "start start","end start"],

  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer"  ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.location.href = item.link}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", " start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="portfolio">
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
