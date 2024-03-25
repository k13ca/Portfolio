import "../App.css";
import "../style.css";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

function ProjectView({ close, project }) {
  return (
    <>
      <div className="projectview">
        <div className="closingbar">
          <IoMdClose className="closing" onClick={() => close(false)} />
        </div>

        <div className="projectcontent">
          <img className="viewphoto" src={project.viewphoto} />

          <div className="viewcontent">
            <h4>{project.title}</h4>
            <h5>{project.tools}</h5>
            <div className="description">
              <h5>{project.description}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectView;
