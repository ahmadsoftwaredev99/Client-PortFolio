import { useEffect, useState } from "react";
import Title from "antd/es/typography/Title";
import projectPic from "../../../assets/images/top-view.jpg";
import { projects } from "../../../components/constants";
import "./project.css";
import AOS from "aos";

const Projects = () => {
  const [filter, setFilter] = useState("All");
 useEffect(()=>{
  AOS.init({
    duration: 300,      
    once: false,       
    easing: "ease-in-out",
  })
 },[])
  const buttons = [
    { btn: "All" },
    { btn: "Internship" },
    { btn: "Personal" },
    { btn: "Team" },
  ];
 

  // Filter Logic
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="project-section">
      <div className="project-overlay">
        <img src={projectPic} alt="project" className="project-img" />
      </div>

      <div className="text-dark text-center">
        <Title level={3} style={{ fontFamily: "client", marginTop: "1rem" }}>
          Click Each Picture to learn more
        </Title>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
          {buttons.map((Item, index) => (
            <button key={index}
              className={`btn rounded-pill px-3 ${
              filter === Item.btn ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setFilter(Item?.btn)}>
              {Item.btn}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="container mt-4">
          <div className="row">
            {filteredProjects.map((item,index) => (
            <div className="col-12 col-md-3 mb-5 d-flex justify-content-center " key={index}>
              <div className="cardss " data-aos="zoom-in" >
                <div className="image">
                </div>
                <div className="content d-flex justify-content-start flex-column">
                  <a href="#">
                    <span className="title ">
                      {item?.title}
                    </span>
                  </a>
                  <p className="desc">
                    {item?.desc}
                  </p>
                  <a className="action  w-50" href="#">
                    See details
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
