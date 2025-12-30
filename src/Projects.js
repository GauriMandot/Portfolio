import dot from "./dot.png";
import psecure from "./Psecure.png";
import mausam from "./Mausam.png";
import swaadly from "./swaadly.png";

const Projects = () => {
  const ProjectArr = [
    {
      name: "Swaadly",
      about: "Food Delivery",
      image: swaadly,
      link: "https://swaadly-project-demo.netlify.app/",
    },

    {
      name: "Mausam",
      about: "Weather",
      image: mausam,
      link:'https://mausam-the-weather-app.netlify.app/',
    },

    {
      name: "P-Secure",
      about: "Password Generator",
      image: psecure,
      link:'https://psecure.netlify.app/',
    },
  ];
  return (
    <div id="Projects">
      <p id="my-web-heading">My Websites</p>

      {ProjectArr.map((project) => {
        return (
          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div key={project.name} className="Project-box">
                <div id="project-details">
                  <div id="icon-box">
                    <img src={project.image} alt="" id="icon-img" />
                  </div>

                  <p className="project-name">{project.name}</p>
                </div>

                <div className="project-desc-box">
                  <button id="project-about-btn" className="btn">
                    {project.about}
                  </button>
                  <button id="live-btn" className="btn">
                    <img src={dot} alt="" />
                    Live
                  </button>
                </div>
              </div>
            </a>

            <hr id="line" />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
