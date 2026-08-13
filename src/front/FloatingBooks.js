import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";

/**covers */
import book1 from "../assets/imgs/covers/book1.png";
import book2 from "../assets/imgs/covers/book2.png";
import book3 from "../assets/imgs/covers/book3.png";
import book4 from "../assets/imgs/covers/book4.png";
import book5 from "../assets/imgs/covers/book5.png";
import book6 from "../assets/imgs/covers/book6.png";
import book7 from "../assets/imgs/covers/book7.png";
import book8 from "../assets/imgs/covers/book8.png"
import book9 from "../assets/imgs/covers/book9.png";
import book10 from "../assets/imgs/covers/book10.png";
import book11 from "../assets/imgs/covers/book11.png";


export default function FloatingBooks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]  // tracks scroll from when section enters to when it leaves viewport
  });

   useEffect(() => {
    return scrollYProgress.on("change", (v) => console.log("scroll progress:", v));
  }, [scrollYProgress]);


  // Each book gets its own y-transform (different speed = parallax depth)
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -250]);
  const y4 = useTransform(scrollYProgress, [0, 1], [60, -280]);
  const y5 = useTransform(scrollYProgress, [0, 1], [90, -220]);
  const y6 = useTransform(scrollYProgress, [0, 1], [100, -270]);
  const y7 = useTransform(scrollYProgress, [0, 1], [130, -230]);
  const y8 = useTransform(scrollYProgress, [0, 1], [160, -370]);
  const y9 = useTransform(scrollYProgress, [0, 1], [120, -200]);
  const y10 = useTransform(scrollYProgress, [0, 1], [170, -170]);
  const y11 = useTransform(scrollYProgress, [0, 1], [140, -290]);



  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className="floating-books-wrap">
      <motion.img 
        src={book1} 
        style={{ y: y1, opacity, top: "25%", left: "5%" }} 
          // style={{ opacity: 1, top: "10%", left: "5%", position: "absolute" }}

        className="floating-book" 
      />
      <motion.img 
        src={book2} 
        style={{ y: y2, opacity, top: "5%", left: "80%" }} 
        className="floating-book" 
      />
      <motion.img 
        src={book3} 
        style={{ y: y3, opacity, top: "15%", left: "45%" , rotate:"-10deg"}} 
        className="floating-book" 
      />
      <motion.img 
        src={book4} 
        style={{ y: y4, opacity, top: "8%", left: "25%" , rotate:"5deg"}} 
        className="floating-book" 
      />
      <motion.img 
        src={book5} 
        style={{ y: y5, opacity, top: "12%", left: "65%", rotate:"15deg" }} 
        className="floating-book" 
      />

      <motion.img 
        src={book6} 
        style={{ y: y6, opacity, top: "150%", left: "15%", rotate:"-20deg" }} 
        className="floating-book" 
      />

      <motion.img 
        src={book7} 
        style={{ y: y7, opacity, top: "230%", left: "80%" , rotate: "11deg"}} 
        className="floating-book" 
      />

      <motion.img 
        src={book8} 
        style={{ y: y8, opacity, top: "140%", right: "79%" , rotate: "10deg" }} 
        className="floating-book" 
      />

      <motion.img 
        src={book9} 
        style={{ y: y9, opacity, top: "280%", left: "75%", rotate:"-20deg" }} 
        className="floating-book" 
      />

      <motion.img 
        src={book10} 
        style={{ y: y10, opacity, top: "200%", right: "75%", rotate:"14deg" }} 
        className="floating-book" 
      />

      <motion.img 
        src={book11} 
        style={{ y: y11, opacity, top: "100%", left: "75%", rotate:"30deg" }} 
        className="floating-book" 
      />

    </div>
  );
}