import React from "react";
import "./skillsItem.css";
import { useState } from "react";
const SkillsItem = ({ item, index, isSelected, onClick, name, stars }) => {
  return (
    <div
      style={{
        width: "90px",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {isSelected && (
        <div className="popup">
          <h5>{name}</h5>

          {stars}
        </div>
      )}
      <img
        onClick={onClick}
        key={index}
        src={item.icon}
        className="skillsicons"
        id="skillsicons"
      ></img>
    </div>
  );
};

export default SkillsItem;
