import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"4 legged robot Dog",
        img:"https://imgs.search.brave.com/ZbKCnLLUcID4xoZ-KR-NLmQI165S9Z0FiHZbvWda7B4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlcm9ib3RyZXBv/cnQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzAzL01J/VC1NaW5pLUNoZWV0/YWgtMDEtUFJFU1Mt/MTAyNHg2ODMuanBn",
        desc:"It is a face Recognition system made using CNN, SVM, FaceNet, Deepface machine learning models. It is capable of marking the attendance of the complete batch with just 1 group photo. It detects individual faces from the group photo and recognises them and after recognition can mark the attendance of the individual on its own",
        link:"https://drive.google.com/drive/folders/1w9XvgW279zFsdY11js6n8th81yPMcV2b?usp=sharing"
    },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}> Git Repo</a>
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
