import yellowFolder from "./yellowFolder.png";
import redFolder from "./redFolder.png";
import linkedin from "./linkedin.png";
import { useState } from "react";

const Contact = () => {
  const [pointer, setPointer] = useState(null);
  return (
    <div id="Contact">
      <div className="folder-div">
        <a
          href="https://www.linkedin.com/in/gauri-mandot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-div">
            <img src={linkedin} alt="" id="linkedin-img" />
          </div>
        </a>

        <img src={redFolder} alt="" className="folder-icon" />
        <p className="Text-on-folder" id="red-text">
          Social Media
        </p>
      </div>
      <div className="folder-div">
        {pointer && (
          <div
            id="see-you-soon-div"
            style={{ left: pointer.x-50, top: pointer.y-20 }}
          >
            See you soon!
          </div>
        )}
        <a
          href="mailto:mandot.gauri.work@gmail.com?subject=Want to hire&body=Hi Gauri, I love your work..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-div">
            <p
              id="contact"
              onMouseMove={(e) => {
                setPointer({
                  x: e.clientX,
                  y: e.clientY,
                });
              }}
              onMouseLeave={() => {
                setPointer(null);
              }}
            >
              <span id="grey-color">Looking for </span>a Frontend Developer?
            </p>
          </div>
        </a>

        <img src={yellowFolder} alt="" className="folder-icon" />
        <p className="Text-on-folder" id="yellow-text">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Contact;
