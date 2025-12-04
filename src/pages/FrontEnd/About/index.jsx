import manPic from "../../../assets/images/handsome-man.jpg";
import aboutPic from "../../../assets/images/about-us.jpg";
import { Popover, Space } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                iusto ullam ad magnam fugit maiores nesciunt delectus eligendi
                beatae cum Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Illum ipsum illo voluptatibus quidem molestias expedita
                quas omnis culpa consectetur quisquam. Esse hic cumque porro ea
                quam unde nesciunt dolores!.
              </p>

              <p className="fs-5" style={{ fontFamily: "client" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                praesentium omnis est hic quod modi, officiis eius autem ab
                veritatis enim quisquam ea, et recusandae iusto dolore! Dolorum,
                natus ipsum.
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
              <img src={manPic} alt="Profile" className="about-imgs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
