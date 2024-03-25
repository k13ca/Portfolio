import "../App.css";
import "../style.css";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

function GalleryView({ close, photo }) {
  return (
    <>
      <div className="projectview">
        <div className="closingbar">
          <IoMdClose className="closing" onClick={() => close(false)} />
        </div>

        <div className="projectcontent">
          <img src={photo} width={50}></img>
        </div>
      </div>
    </>
  );
}

export default GalleryView;
