import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = "https://harisakram.vercel.app" + "/HarisAkramCV.pdf";
    link.setAttribute("download", "HarisAkramCV.pdf"); // Set the download attribute and filename
    document.body.appendChild(link);

    // Simulate a click to trigger the download
    link.click();

    // Clean up and remove the link element
    document.body.removeChild(link);
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARIS AKRAM</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Us</a>
            </motion.button>

            <motion.button
              variants={textVariants}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Downlaod CV
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
