import { useState } from "react";
import "./App.css";
import "./style.css";
import "./0header/header.css";
import "./1caption/caption.css";
import "./2skills/skills.css";
import "./3projects/pjc.css";
import "./3projects/pjcview.css";
import "./4gallery/gallery.css";
import "./5contact/contact.css";

import Header from "./0header/header";
import Caption from "./1caption/caption";
import Skills from "./2skills/skills";
import Pjc from "./3projects/pjc";
import Gallery from "./4gallery/gallery";

import listapp1 from "./assets/listapp1.png";
import listapp2 from "./assets/listapp2.png";
import listapp3 from "./assets/listapp3.png";
import listapp4 from "./assets/listapp4.png";
import listapp5 from "./assets/listapp5.png";
import listapp6 from "./assets/listapp6.png";
import listapp7 from "./assets/listapp7.png";
import Contact from "./5contact/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className='background'> 
<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div className='obj1'></div>
    <div className='obj2'></div>
    <div className='obj3'></div>
    <div className='obj4'></div>
</div>   */}

      <div className="noise">
        <svg width="100%" height="100%">
          <filter id="noisesvg">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.2"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="10"
              specularConstant="0.9"
              specularExponent="20"
              lightingColor="#888888"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="100"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </svg>
      </div>

      <div className="obj1"></div>

      <div className="scroll">
        <Header></Header>
        <Caption></Caption>
        <Skills></Skills>
        <Pjc></Pjc>
        <Gallery></Gallery>

        {/* {projects.map((item, index)=>
     <Projects
       title={item.title}
       description={item.description}
       photos={item.photos}
       key={index}/>
   
     )
 }  */}
      </div>
    </>
  );
}

export default App;
