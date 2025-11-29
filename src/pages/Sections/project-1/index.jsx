import { Link } from "react-router-dom";
import { project } from "../../../components/constants";
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
              <button className="bg-dark rounded-pill px-4 py-2 text-white fs-5 btn-wide">
                Project Page
              </button>
            </Link>
            <Link to="/">
              <button className="bg-dark rounded-pill px-4 py-2 text-white fs-5 btn-wide">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* FULL WIDTH FOOTER (OUTSIDE CONTAINER) */}
      <div className="w-100 mt-5 bg-light py-3 d-flex justify-content-between align-items-center px-5">
        <Link className="d-flex align-items-center gap-2 link-offset-2 link-underline link-underline-opacity-0" to="">
          <i className="fa-brands fa-linkedin fs-3" style={{ color: "#0A66C2" }}></i>
          <span className="fs-5">LinkedIn</span>
        </Link>
        <p className="m-0 fs-5">Email: jonshem@gmail.com</p>
      </div>
    </section>
  );
};

export default Project_1;
