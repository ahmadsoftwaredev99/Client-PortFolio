import resume from "../../../assets/images/resume.jpg";
import cv from "../../../assets/images/cv.png";
import Client_Resume from "../../../assets/CV/REMLI_CV.pdf";
import "./resume.css";
const Resume = () => {
  return (
    <section>
      <div className="resume-img">
        <img src={resume} alt="resume" className=" img" />
      </div>
      <div className="resume img-fluid ">
        <img src={cv} alt="CV" />
        <div className="btn-wrap">
          <a className="link" href={Client_Resume} download="REMLI_CV.pdf">
          <button className="download-btn">
            <span>Download Resume</span>
            <svg viewBox="0 0 256 256" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"fill="currentColor"></path></svg>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
