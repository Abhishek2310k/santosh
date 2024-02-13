import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
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
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Projects</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>In</motion.b> Colaboration
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} style={{width:"90%"}}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cosmo Logistic </h2>
          <p>
          The "Cosmo Logistic" theme involves autonomously sorting packages using a robotic arm (UR5) and a mobile robot in a space station warehouse. Initially simulated in Gazebo, stage 2 entails accessing real hardware at IIT Bombay for remote operation.
          </p>
          <a href="https://drive.google.com/drive/folders/18TkSzFLBN7SlWk5eIhraG6vKoCb0i5wq?usp=sharing" style={{width:"150px"}}>Details</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{fontSize:"20px"}}>Localization Technology Development </h2>
          <p>
          Development of technology for localization using onboard sensors for UGV and UAV. And docking using vision. And implementation of this technology for warehouse management.
          </p>
          <a href="https://drive.google.com/drive/folders/1sHnQbyKxf6GDL3TszfF5hUATcWHZcPW4?usp=sharing" style={{width:"150px"}}>Details</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Swachhta Bot</h2>
          <p>
          Building the SB robot swiftly collects segregated waste in cities and deposits it into separate bins. SB Bot used an FPGA for controlling its sensors, actuators, and pick-place mechanism.
          </p>
          <a href="https://drive.google.com/drive/folders/12umBW8gSPzC5GX6vwj5EmvWuPI43g_46?usp=sharing" style={{width:"150px"}}>Details</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Micromouse</h2>
          <p>
          In this project, we build a bot that first moves in the arena and finds the shortest path by using Flood Fill algorithm, and in the final it will go through the shortest path.

          </p>
          <a href="https://drive.google.com/drive/folders/1t1LulsWbuigVYtpUokf3V-4YkjPrQ8nW?usp=sharing" style={{width:"150px"}}>Details</a>
        </motion.div>
        
        
      </motion.div>
    </motion.div>
  );
};

export default Services;