import react from "react";
import { useEffect, useState } from "react";
import poster from "../assets/imgs/hiw-poster.png";
import { p } from "framer-motion/client";

export default function HowItWorks(){
    return(
        <>

        <div className="hiw-split hiw-split-a"></div>

          <div className="hiw-split hiw-split-b">

            <img src={poster}></img>
          </div>

          {/* animated wavy seam between them */}
          <div className="hiw-wave-wrap">
            <svg
              className="hiw-wave-svg"
              viewBox="0 0 140 1600"
              preserveAspectRatio="none"
            >
              <rect x="0" y="0" width="140" height="1600" className="hiw-wave-fill-b" />
              <path
                className="hiw-wave-fill-a"
                d="M70,0 C50,25 50,75 70,100 C90,125 90,175 70,200
                   C50,225 50,275 70,300 C90,325 90,375 70,400
                   C50,425 50,475 70,500 C90,525 90,575 70,600
                   C50,625 50,675 70,700 C90,725 90,775 70,800
                   C50,825 50,875 70,900 C90,925 90,975 70,1000
                   C50,1025 50,1075 70,1100 C90,1125 90,1175 70,1200
                   C50,1225 50,1275 70,1300 C90,1325 90,1375 70,1400
                   C50,1425 50,1475 70,1500 C90,1525 90,1575 70,1600
                   L0,1600 L0,0 Z"
              />
            </svg>
          </div>

    <div className="hiw-container">

       <div className="hiw-headline">

                            <div className="lp2-eyebrow hiw"><span></span>How it Works</div>

                            <h1 className="headline hiw"> <span>Shelf, Track, & Review</span> your current reads with bookreads community.</h1>
                            <p className="sub-hiw">create your own shelfs and organize your books right here without forgetting about them.</p>

                        </div>
              <div className="hiw-cards">
                <div className="hiw-card">

                </div>
            </div>
        </div> 
      
        </>
    )
}