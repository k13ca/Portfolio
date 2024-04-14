import { useState, useRef, useEffect } from "react";
import { HiOutlineArrowLongUp } from "react-icons/hi2";

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

function App() {
  //boback button
  const [isOntop, setIsOntop] = useState(true);
  const header = useRef(null);

  useEffect(() => {
    const scroll = new IntersectionObserver(
      ([entry]) => {
        setIsOntop(entry.isIntersecting);
      },
      { rootMargin: "-300px", delay: 50 }
    );
    console.log(isOntop);
    scroll.observe(header.current);

    return () => scroll.disconnect();
  }, [isOntop]);

  useEffect(() => {
    if (isOntop) {
      document.querySelectorAll(".gbbutton").forEach((el) => {
        el.style.display = "none";
      });
    } else {
      document.querySelectorAll(".gbbutton").forEach((el) => {
        el.style.display = "flex";
      });
    }
  }, [isOntop]);
  //boback button end

  //skills loading
  const [isIntersectingSkills, setIsIntersectingSkills] = useState(false);
  const skills = useRef(null);

  useEffect(() => {
    const observerSkills = new IntersectionObserver(
      ([entry]) => {
        setIsIntersectingSkills(entry.isIntersecting);
      },
      { rootMargin: "-100px", delay: 50 }
    );
    observerSkills.observe(skills.current);

    return () => observerSkills.disconnect();
  }, [isIntersectingSkills]);

  useEffect(() => {
    if (isIntersectingSkills) {
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
  }, [isIntersectingSkills]);
  //skills loading end

  //projects loading
  const [isIntersectingProjects, setIsIntersectingProjects] = useState(false);
  const projects = useRef(null);

  useEffect(() => {
    const observerProjects = new IntersectionObserver(
      ([entry]) => {
        setIsIntersectingProjects(entry.isIntersecting);
      },
      { rootMargin: "-100px", delay: 50 }
    );
    observerProjects.observe(projects.current);

    return () => observerProjects.disconnect();
  }, [isIntersectingProjects]);

  useEffect(() => {
    if (isIntersectingProjects) {
      document.querySelectorAll(".fproject").forEach((el) => {
        el.style.animation = "fadein 1s ";
        el.style.display = "block";
      });
    } else {
      document.querySelectorAll(".fproject").forEach((el) => {
        el.style.animation = "fadeout 1s ";
        el.style.display = "none";
      });
    }
  }, [isIntersectingProjects]);
  //projects loading end

  //gallery loading
  const [isIntersectingGallery, setIsIntersectingGallery] = useState(false);
  const gallery = useRef(null);

  useEffect(() => {
    const observerGallery = new IntersectionObserver(
      ([entry]) => {
        setIsIntersectingGallery(entry.isIntersecting);
      },
      { rootMargin: "-100px", delay: 50 }
    );
    observerGallery.observe(gallery.current);

    return () => observerGallery.disconnect();
  }, [isIntersectingGallery]);

  useEffect(() => {
    if (isIntersectingGallery) {
      document.querySelectorAll(".column").forEach((el) => {
        el.style.animation = "fadein 1s ";
        el.style.display = "block";
      });
    } else {
      document.querySelectorAll(".column").forEach((el) => {
        el.style.animation = "fadeout 1s ";
        el.style.display = "none";
      });
    }
  }, [isIntersectingGallery]);
  //gallery loading end

  return (
    <>
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

      <div
        className="gbbutton"
        onClick={() => header.current.scrollIntoView({ behavior: "smooth" })}
      >
        <HiOutlineArrowLongUp className="gbbuttonarrow" />
      </div>

      <div className="scroll">
        <Header ref={header}></Header>
        <Caption></Caption>
        <Skills ref={skills}></Skills>
        <Pjc ref={projects}></Pjc>
        <Gallery ref={gallery}></Gallery>
      </div>
    </>
  );
}

export default App;
