import "../App.css";
import "../style.css";

import Title from "../title";
import SkillsItem from "./skillsItem";
import { forwardRef, useState } from "react";
import { skills } from "../consts/consts";
const Skills = forwardRef(function Skills(props, ref) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (index) => {
    setSelectedSkill(index === selectedSkill ? null : index);
  };

  return (
    <>
      <section className="thirdbox" id="skills" ref={ref}>
        <Title title={"Skills"}></Title>

        <div id="thskills" className="thskills">
          <div className="obj2"></div>

          {skills.map((item, index) => (
            <SkillsItem
              item={item}
              index={index}
              key={index}
              // onClick={() => handleSkillClick(index)}
              isSelected={index === selectedSkill}
            />
          ))}
        </div>
      </section>
    </>
  );
});

export default Skills;
