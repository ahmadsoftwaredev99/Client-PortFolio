import { Link } from "react-router-dom";
import { project } from "../../../components/constants";
import PorfileLink from "../../../components/profileLink";
import "./project_1.css";

const Project_1 = () => {
  return (
    <section className="pt-5">
      {/* MAIN CONTENT */}
      <div className="container">
        <div className="row justify-content-center">
          {project.map((items, index) => (
            <div className="col-12 col-md-6 d-flex justify-content-center mb-4" key={index}>
              <div className="card-hover">
                <img src={items?.img} alt="project" className="card-img" />
                <div className="card-content">
                  <h2>{items?.title}</h2>
                  <i>{items?.other}</i>
                </div>
              </div>
            </div>
          ))}
          {/* CENTER BUTTONS */}
          <div className="col-12 d-flex flex-column align-items-center gap-3 mt-3">
            <Link to="/projects">
              <button className="bg-dark rounded-pill px-4 py-2 text-white fs-5 btn-wide">Project Page</button>
            </Link>
            <Link to="/resume">
              <button className="bg-dark rounded-pill px-4 py-2 text-white fs-5 btn-wide">Resume</button>
            </Link>
          </div>
        </div>
      </div>
      {/*  FULL-WIDTH RESPONSIVE ROW  */}
      <PorfileLink/>
    </section>
  );
};

export default Project_1;
