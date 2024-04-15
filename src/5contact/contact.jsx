import "../App.css";
import "../style.css";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { TfiPin } from "react-icons/tfi";

function Contact({ isShown, close }) {
  const topProperty = isShown ? "0%" : "-120%";

  function copymail() {
    const email = "k13cacontact@yahoo.com";
    navigator.clipboard.writeText(email);
  }

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
          <div className="conblock">
            <TfiPin style={{ marginRight: "20px" }} className="gbbuttonarrow" />
            <h4>Kielce</h4>
          </div>

          <div className="conblock">
            <a
              title="https://github.com/k13ca"
              href={"https://github.com/k13ca"}
              target="_blank"
              className="conbutton"
            >
              <h5>GitHub</h5>
            </a>
            <div
              onClick={() => copymail()}
              className="conbutton"
              title="Copy e-mail"
            >
              <h5>E-mail</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
