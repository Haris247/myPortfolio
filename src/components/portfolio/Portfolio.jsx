import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Trend",
    img: "/projects/ecommerce.PNG",
    desc: "An online marketplace where users can purchase trendy goods, supported by a payment system and admin panel.",
  },
  {
    id: 2,
    title: "TechXpert",
    img: "/projects/blog1.PNG",
    desc: "An online application where users can share information related to the dynamic world of technology. Supported by content Management functionality for admins.",
  },
  {
    id: 3,
    title: "Crowd",
    img: "/projects/social.PNG",
    desc: "An online community exclusively for the students of the University of South Asia.",
  },
  {
    id: 4,
    title: "ping",
    img: "/projects/chat.PNG",
    desc: "An interactive messaging platform for users to connect with friends and groups in real-time supporting multimedia sharing..",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
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
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
