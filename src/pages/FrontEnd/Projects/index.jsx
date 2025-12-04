import { useEffect, useState } from "react";
import Title from "antd/es/typography/Title";
import projectPic from "../../../assets/images/top-view.jpg";
import { projects } from "../../../components/constants";
import AOS from "aos";
import "./project.css";
import { Image } from "antd";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  useEffect(()=>{AOS.init({duration: 300,once: false,easing: "ease-in-out",})},[])
  const buttons = [{ btn: "All" },{ btn: "Internship" },{ btn: "Personal" },{ btn: "Team" },];

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
              className={`btn rounded-pill px-3 filter-btn ${
              filter === Item.btn ? "active-btn" : "btn-outline-dark"}`}
              onClick={() => setFilter(Item?.btn)}>
              {Item.btn}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="container mt-4">
          <div className="row">
            {filteredProjects.map((item,index) => (
            <div className="col-12 col-md-3 mb-5 d-flex justify-content-center " key={filter + index}>
              <div className="cardss  project-card-animate" data-aos="zoom-in" >
                <div className="h-75">
                  <Image src={item?.img} alt="projects" className="image"/>
                </div>
                <div className="content flex-column">
                  <a href="#"><span className="title ">{item?.title} </span></a>
                  <p className="desc">{item?.desc} </p>
                  <a href="#">See details<span aria-hidden="true"> →</span></a>
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
