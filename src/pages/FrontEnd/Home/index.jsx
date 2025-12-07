import black from '../../../assets/images/black.png'
import Summary from "../../Sections/Summary";
import Timeline from "../../Sections/timelineCard";
import "./home.css";

const Home = () => {
  return (
    <>
      <section>
        <div className="parent">
          <img className='hero-img' src={black} alt="imges" />
          <div className='client-name'>
            <h1>REMLI ABDELHAKIM</h1>
            <h5>PORTFOLIO</h5>
          </div>
        </div>
      </section>
      <Summary />
      <Timeline />
    </>
  );
};

export default Home;
