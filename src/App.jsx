import { useState, useRef, useEffect } from "react";
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

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px", delay: 50 }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      //ref.current.style.animation = 'fadein 3s ease-in'
      //document.getElementById("skillsicons").style.animation = "fadein 1s ease-in";
      document.querySelectorAll(".skillsicons").forEach((el) => {
        el.style.animation = "fadein 1s ";
        el.style.display = "block";
      });
    } else {
      document.querySelectorAll(".skillsicons").forEach((el) => {
        el.style.animation = "fadeout 1s ";
        el.style.display = "none";
      });
    }
  }, [isIntersecting]);

  return (
    <>
      {/* <div className="noise">
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
      </div> */}

      <div className="noise">
        <svg>
          <filter id="noisesvg">
            <feTurbulence type="turbulance" baseFrequency={5} />
          </filter>
        </svg>
      </div>

      {/* <div className="noise2">
        <svg>
          <filter id="noisesvg">
            <feTurbulence type="turbulance" baseFrequency={5} />
          </filter>
        </svg>
      </div> */}

      {/* <div className="obj1"></div> */}

      <div className="scroll">
        <Header></Header>
        <Caption></Caption>
        <Skills ref={ref}></Skills>
        <Pjc></Pjc>
        <Gallery></Gallery>
      </div>
    </>
  );
}

export default App;
