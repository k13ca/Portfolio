import {
  html,
  css,
  photoshop,
  react,
  figma,
  lightroom,
  illustrator,
  js,
  mobileapp,
  mobileappview,
  portfolio,
  portfolioview,
  jwview,
  jwproject,
} from "../assets/index";

export const skills = [
  { name: "Photoshop", icon: photoshop, stars: "4" },
  { name: "FigmaL", icon: figma, stars: "3" },
  { name: "HTML", icon: html, stars: "4" },
  { name: "CSS", icon: css, stars: "4" },
  { name: "React", icon: react, stars: "1" },
  { name: "React Native", icon: react, stars: "3" },
  { name: "Lightroom", icon: lightroom, stars: "3" },
  { name: "Illustrator", icon: illustrator, stars: "3" },
  { name: "Javascript", icon: js, stars: "3" },
];

export const projects = [
  {
    title: `Mobile Application`,
    description:
      "Graphic design and implementation of an interactive mobile application for time management. It has the necessary functionalities that allow you to plan your schedule and implement it, saving your time. The application was created using React Native technology, Node.js + Express as the backend and MySQL as the database.",
    tools: "React Native | JavaScript | SQL",
    mainphoto: mobileapp,
    viewphoto: mobileappview,
    photos: [],
  },
  {
    title: `Portfolio`,
    description:
      "A personal portfolio describing myself and the graphic experience I have acquired over the years. Apart from design, this project also demonstrates the ability to use web technologies such as HTML, CSS and React.",
    tools: "HTML | CSS | React",
    mainphoto: portfolio,
    viewphoto: portfolioview,
    photos: [],
  },
  {
    title: `Web Shop Design`,
    description:
      "Graphic project designed with the Figma tool. Graphics for design purposes were created using Photoshop. This is a classic business card/shop application for an example business such as a winery. The project demonstrates the ability to use the necessary tools but also knowledge of good design principles.",
    tools: "Photoshop | Figma",
    mainphoto: jwproject,
    viewphoto: jwview,
    photos: [],
  },
];

export const gallery = [
  mobileapp,
  mobileappview,
  portfolio,
  portfolioview,
  jwview,
  jwproject,
];
