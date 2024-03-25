import "../App.css";
import "../style.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import mobileapp from "../assets/mobileappproject.svg";
import mobileappview from "../assets/mobileappview.svg";
import listapp2 from "../assets/listapp2.png";
import listapp3 from "../assets/listapp3.png";
import listapp4 from "../assets/listapp4.png";
import listapp5 from "../assets/listapp5.png";
import listapp6 from "../assets/listapp6.png";
import listapp7 from "../assets/listapp7.png";
import jwproject from "../assets/jwproject.png";
import Title from "../title";
import ProjectView from "./pjcview";

function Pjc({ title }) {
  const projects = [
    {
      title: `Mobile Application`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tools: "React Native | JavaScript | SQL",
      mainphoto: mobileapp,
      viewphoto: mobileappview,
      photos: [
        { name: "listapp2", icon: listapp2 },
        { name: "listapp3", icon: listapp3 },
        { name: "listapp4", icon: listapp4 },
        { name: "listapp5", icon: listapp5 },
        { name: "listapp6", icon: listapp6 },
        { name: "listapp7", icon: listapp7 },
      ],
    },
    {
      title: `Portfolio`,
      description: "xdddd",
      tools: "HTML | CSS | React",
      mainphoto: listapp2,
      photos: [
        { name: "listapp1", icon: listapp2 },
        { name: "listapp2", icon: listapp2 },
        { name: "listapp3", icon: listapp3 },
        { name: "listapp4", icon: listapp4 },
        { name: "listapp5", icon: listapp5 },
        { name: "listapp6", icon: listapp6 },
        { name: "listapp7", icon: listapp7 },
      ],
    },
    {
      title: `Web/Shop Project`,
      description: "xdddd",
      tools: "Photoshop | Figma",
      mainphoto: jwproject,
      photos: [
        { name: "listapp1", icon: listapp2 },
        { name: "listapp2", icon: listapp2 },
        { name: "listapp3", icon: listapp3 },
        { name: "listapp4", icon: listapp4 },
        { name: "listapp5", icon: listapp5 },
        { name: "listapp6", icon: listapp6 },
        { name: "listapp7", icon: listapp7 },
      ],
    },
    {
      title: `app2`,
      description: "xdddd",
      tools: "frgthyjukjhgfd",
      mainphoto: listapp2,
      photos: [
        { name: "listapp1", icon: listapp2 },
        { name: "listapp2", icon: listapp2 },
        { name: "listapp3", icon: listapp3 },
        { name: "listapp4", icon: listapp4 },
        { name: "listapp5", icon: listapp5 },
        { name: "listapp6", icon: listapp6 },
        { name: "listapp7", icon: listapp7 },
      ],
    },
  ];

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
