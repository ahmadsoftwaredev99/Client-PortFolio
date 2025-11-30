import vedioHero from "../../../../public/Vedio/hero-section.mp4"
import Summary from "../../Sections/Summary";
import Timeline from "../../Sections/timelineCard";
import Project from "../../Sections/Project"
import Project_1 from "../../Sections/project-1";
import "./home.css";

const Home = () => {
  return (
    <>
      <section>
        <div className="parent">
          <video className="hero-video" src={vedioHero} autoPlay muted loop>
          </video>
          <div className="data">
            <h4>Mechanical Engineering Portfolio</h4>
            <h1 className="clientName">Jonashem</h1>
          </div>
        </div>
      </section>
      <Summary/>
      <Timeline/>
      <Project/>
      <Project_1/>

    </>
  );
};

export default Home;
