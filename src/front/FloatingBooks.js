import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";
import book1 from "../assets/imgs/covers/book1.png";
import book2 from "../assets/imgs/covers/book2.png";
import book3 from "../assets/imgs/covers/book3.png";
import book4 from "../assets/imgs/covers/book4.png";
import book5 from "../assets/imgs/covers/book5.png";
import book6 from "../assets/imgs/covers/book6.png";




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
        style={{ y: y3, opacity, top: "15%", left: "45%" }} 
        className="floating-book" 
      />
      <motion.img 
        src={book4} 
        style={{ y: y4, opacity, top: "8%", left: "25%" }} 
        className="floating-book" 
      />
      <motion.img 
        src={book5} 
        style={{ y: y5, opacity, top: "12%", left: "65%" }} 
        className="floating-book" 
      />

      <motion.img 
        src={book6} 
        style={{ y: y6, opacity, top: "100%", left: "75%" }} 
        className="floating-book" 
      />
    </div>
  );
}