import "../App.css";
import "../style.css";

import html from "../assets/html.svg.png";
import css from "../assets/css.svg.png";
import photoshop from "../assets/photoshop.svg.png";
import react from "../assets/reactnative.png";
import figma from "../assets/figma.svg.png";
import Title from "../title";
import SkillsItem from "./skillsItem";
import { useState } from "react";
function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (index) => {
    setSelectedSkill(index === selectedSkill ? null : index);
  };

  const skills = [
    { name: "Photoshop", icon: photoshop, stars: "4" },
    { name: "FigmaL", icon: figma, stars: "3" },
    { name: "HTML", icon: html, stars: "4" },
    { name: "CSS", icon: css, stars: "4" },
    { name: "React", icon: react, stars: "1" },
    { name: "React Native", icon: react, stars: "3" },

    { name: "Photoshop", icon: photoshop },
    { name: "FigmaL", icon: figma },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "React", icon: react },
    { name: "React Native", icon: react },
  ];

  return (
    <>
      <section className="thirdbox" id="skills">
        <Title title={"Skills"}></Title>

        <div className="thskills">
          {skills.map((item, index) => (
            <SkillsItem
              item={item}
              index={index}
              key={index}
              onClick={() => handleSkillClick(index)}
              isSelected={index === selectedSkill}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
