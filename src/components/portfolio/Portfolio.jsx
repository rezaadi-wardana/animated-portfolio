import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Project",
    img: "https://images.pexels.com/photos/26694146/pexels-photo-26694146/free-photo-of-man-sitting-and-watching-picture-of-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae faucibus lectus. Curabitur in facilisis neque.",
  },
  {
    id: 2,
    title: "UMKM Website",
    img: "https://images.pexels.com/photos/28104106/pexels-photo-28104106/free-photo-of-a-view-of-a-bridge-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae faucibus lectus. Curabitur in facilisis neque.",
  },
  {
    id: 3,
    title: "Laravel Project",
    img: "https://images.pexels.com/photos/28348904/pexels-photo-28348904/free-photo-of-a-wave-breaking-at-sunset-with-the-sun-behind-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae faucibus lectus. Curabitur in facilisis neque.",
  },
  {
    id: 4,
    title: "JS Vanilla",
    img: "https://images.pexels.com/photos/28303415/pexels-photo-28303415/free-photo-of-a-close-up-of-a-colorful-rug-with-a-pattern.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae faucibus lectus. Curabitur in facilisis neque.",
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
            <button>See Demo</button>
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
    <div className="portfolio" ref={ref}>
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
