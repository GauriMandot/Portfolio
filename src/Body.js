import html from "./html.png";
import css from "./css-3.png";
import tailwind from "./tailwind css.png";
import javascript from "./js.png";
import react from "./react.svg";
import redux from "./redux.png";
import cplusplus from "./c-.png";
import dsa from "./dsa.png";
import github from "./github-sign.png";
import vscode from "./vs code.JPG";
import canva from "./canva.jpeg";
import { useState } from "react";
import Projects from "./Projects";
import About from './About.js';
import Contact from "./Contact.js";

const Body = () => {
  let skillArr = [
    { name: "HTML", icon: html, level: 95 },
    { name: "CSS", icon: css, level: 80 },
    { name: "Tailwind", icon: tailwind, level: 75 },
    { name: "JavaScript", icon: javascript, level: 95 },
    { name: "React", icon: react, level: 90 },
    { name: "Redux", icon: redux, level: 90 },
    { name: "C++", icon: cplusplus, level: 97 },
    { name: "DSA", icon: dsa, level: 95 },
    { name: "GitHub", icon: github, level: 70 },
    { name: "VS Code", icon: vscode, level: 70 },
    { name: "Canva", icon: canva, level: 80 },
  ];

  const [mouseTip, setMouseTip] = useState(null);

  return (
    <div id="body">
      <p id="skills-heading">Skills</p>
      <div id="skills">
        {skillArr.map((val) => {
          return (
            <div className="skill-section">
              <img
                src={val.icon}
                alt=""
                className="skill-icon"
                onMouseMove={(e) => {
                  setMouseTip({
                    x: e.clientX,
                    y: e.clientY,
                    value: val.level,
                  });
                }}
                onMouseLeave={() => {
                  setMouseTip(null);
                }}
              />

              {mouseTip && (
                <p
                  className="percent"
                  style={{ left: mouseTip.x - 15, top: mouseTip.y - 30 }}
                >
                  {mouseTip.value}%
                </p>
              )}

              <p className="skill-name">{val.name}</p>
            </div>
          );
        })}
      </div>
      <Projects />
      <About/>
      <Contact/>
    </div>
  );
};

export default Body;
