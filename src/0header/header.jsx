import { forwardRef, useState } from "react";
import "../App.css";
import "../style.css";
import { ImSun } from "react-icons/im";
import { LuMoonStar } from "react-icons/lu";

import Contact from "../5contact/contact";

const Header = forwardRef(function Header(props, ref) {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("light");
    }
  };

  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <Contact isShown={showContact} close={setShowContact}></Contact>

      <section className="firstbox" id="top" ref={ref}>
        <div className="bganimation">
          <div className="topbar">
            <div className="topbarcontent">
              {mode === "light" ? (
                <LuMoonStar className="schemebutton" onClick={changeMode} />
              ) : (
                <ImSun className="schemebutton" onClick={changeMode} />
              )}
            </div>
          </div>

          <div className="fcontent">
            <div className="fheader">
              <h1>Portfolio</h1>
              <h2>UX/UI Designer | Front End Dev</h2>
              <div
                className="contactbutton"
                onClick={() => setShowContact(true)}
              >
                <h5>contact</h5>
              </div>
            </div>

            <div className="fmenu">
              <a href="#caption">
                <h5>about&nbsp;me</h5>
              </a>
              <a href="#skills">
                <h5>skills</h5>
              </a>
              <a href="#projects">
                <h5>projects</h5>
              </a>
              <a href="#gallery">
                <h5>gallery</h5>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Header;
