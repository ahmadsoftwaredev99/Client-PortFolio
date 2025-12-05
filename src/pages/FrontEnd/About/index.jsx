import { Popover, Space } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import remli from '../../../assets/images/remli.jpg'
import aboutPic from "../../../assets/images/about-us.jpg";
import Title from "antd/es/typography/Title";
import AOS from "aos";
import "./about.css";


const About = () => {
   useEffect(() => {
      AOS.init({
        duration: 300,      
        once: false,       
        easing: "ease-in-out",
      });
    }, []);
  const content = (
    <div style={{ width: "220px" }}>
      <p>
        I help industries improve productivity, optimize workflows, and reduce
        process waste using Lean Manufacturing techniques.
      </p>
    </div>
  );
  return (
    <section>
      <div className="about-section">
        <img src={aboutPic} alt="about" className="img-fluid img" />
      </div>

      <div className="container">
        <div className="row mt-3 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 d-flex justify-content-center  text-center text-md-start">
            <div data-aos="fade-right" className="details mt-4">
              <Title level={1}>About Me</Title>
              <p className="fs-5" style={{ fontFamily: "client" }}>
                I’m an industrial engineering Student with a strong mechanical mindset and a straightforward, results-focused approach. I work by understanding systems clearly, spotting weaknesses, and fixing them with practical, technical solutions.
              </p>

              <p className="fs-5" style={{ fontFamily: "client" }}>
                CAD is one of my main passions alongside cars. I spend a lot of time designing and modeling parts, and I enjoy turning mechanical ideas into precise 3D components. I also worked in an automotive engineering design office on the Body-in-White perimeter, using CATIA to develop structural parts and interfaces for Stellantis Group Cars.
              </p>
              <p className="fs-5" style={{ fontFamily: "client" }}>
              Cars are the other major side of my life. I’m deeply involved in DIY mechanical work—engine diagnostics, repairs, upgrades, and understanding how every subsystem behaves. The hands-on work and the CAD design constantly reinforce each other.
              </p>
              <p className="fs-5" style={{ fontFamily: "client" }}>
              I’m currently completing a three-year apprenticeship in the Renault Group’s automotive engine factory, which gives me real experience with manufacturing processes, quality standards, and how mechanical design becomes actual production hardware.
              </p>
              <p className="fs-5" style={{ fontFamily: "client" }}>
              Everything I do combines engineering logic, practical work, and precise 3D design to create solutions that actually work.
              </p>
              <div className="mt-4 mb-4">
                <Space>
                <Popover content={content} title="What I Do" trigger="click">
                  <button className="btn btn-dark "
                    style={{ borderRadius: "8px" }}>
                    Click to know more
                  </button>
                </Popover>
                <Link to='/resume'>
                  <button className="btn btn-dark ms-5" style={{borderRadius:'8px'}}>My Resume</button>
                </Link>
                </Space>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div data-aos="fade-left" className="details mt-4 text-center">
              <img src={remli} alt="Profile" className="img-fluid" style={{borderRadius:'8px'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
