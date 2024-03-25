import "../App.css";
import "../style.css";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

function Contact({ isShown, close }) {
  const topProperty = isShown ? "0%" : "-120%";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isShown]);

  return (
    <>
      <div style={{ top: topProperty }} className="contact">
        <div className="closingbar">
          <IoMdClose className="closing" onClick={() => close(false)} />
        </div>

        <div className="concontent">
          <div className="conbutton">fgh</div>
          <div className="conbutton">fghjk</div>
        </div>
      </div>
    </>
  );
}

export default Contact;
