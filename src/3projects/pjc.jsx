import "../App.css";
import "../style.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useRef, useState } from "react";
import { projects } from "../consts/consts";
import Title from "../title";
import ProjectView from "./pjcview";

function Pjc({ title }) {
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const refs = projects.map(() => useRef(null));
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const fhContentRef = useRef();

  const changeSlideIndex = (type) => {
    switch (type) {
      case "increment":
        setIdx((prev) => prev + 1);
        break;
      case "decrement":
        setIdx((prev) => prev + 1);
        break;
    }
    fhContentRef.current.scrollIntoView();
    const timer = setTimeout(() => {
      refs[idx].current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, 300);
    return clearTimeout(timer);
  };

  return (
    <>
      {showProject && (
        <ProjectView
          isShown={showProject}
          close={setShowProject}
          project={currentProject}
          title={title}
        ></ProjectView>
      )}

      <section className="fourthbox" id="projects">
        <Title title={"Projects"}></Title>

        <div className="fthcontent" ref={fhContentRef}>
          <div className="farrow" onClick={() => changeSlideIndex("decrement")}>
            <MdArrowBackIosNew />
          </div>

          <div className="fprojects" ref={ref}>
            {projects.map((item, idx) => (
              <div
                key={idx}
                ref={refs[idx]}
                className="fproject"
                onClick={() => {
                  setShowProject(true);
                  setCurrentProject(item);
                }}
              >
                <div
                  className="pphoto"
                  style={{ backgroundImage: `url(${item.mainphoto})` }}
                />
                <div className="pdesc">
                  <h4>{item.title}</h4>
                  <h5>{item.tools}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="farrow" onClick={() => changeSlideIndex("increment")}>
            <MdArrowForwardIos />
          </div>
        </div>
      </section>
    </>
  );
}

export default Pjc;
