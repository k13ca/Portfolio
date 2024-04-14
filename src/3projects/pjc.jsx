import "../App.css";
import "../style.css";
// import { MdArrowBackIosNew } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";
import { useRef, useState, forwardRef } from "react";
import { projects } from "../consts/consts";
import Title from "../title";
import ProjectView from "./pjcview";

const Pjc = forwardRef(function Pjc({ title }, ref) {
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
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

      <section className="fourthbox" id="projects" ref={ref}>
        <Title title={"Projects"}></Title>

        <div className="fthcontent">
          {/* <div className="farrow" onClick={() => changeSlideIndex("decrement")}>
            <MdArrowBackIosNew />
          </div> */}

          <div className="fprojects">
            {projects.map((item, idx) => (
              <div
                key={idx}
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

          {/* <div className="farrow" onClick={() => changeSlideIndex("increment")}>
            <MdArrowForwardIos />
          </div> */}
        </div>
      </section>
    </>
  );
});

export default Pjc;
