import { logos_images } from "../../../components/constants";
import clientPost from "../../../assets/images/post.png";
import "./summary.css";
import { Link } from "react-router-dom";
import { eexperiencecard } from "../../../components/ExperienceCard";

const Summary = () => {
  return (
    <>
      <section className="summary">
        <div className="container sum">
          <div className="row">
            <div className="col-12 ">
              <div className="summary text-center">
                <h1 className="mb-2">Summary</h1>
                <p className="fs-5">
                  Thanks for checking out my portfolio! Whether you’re a
                  recruiter, fellow engineer, friend, or lost stranger, I hope
                  you enjoy the ride.
                </p>
                <img src={clientPost} alt="level" className="img-fluid" />
              </div>
            </div>
           
            <div className="text-center mt-5">
              <h1>Experinece</h1>
              <div className="row justify-content-center align-items-start mt-4">
                {eexperiencecard.map((item, index) => (
                  <div className="col-12 col-md-3 d-flex justify-content-center mb-3" key={index}>
                    <div className="cards" >
                      <div className="card1">
                        <h6>{item?.title}</h6>
                        <p className="small">{item?.description}</p>
                        <div className="go-corner">
                          <div className="go-arrow">→</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Summary;
