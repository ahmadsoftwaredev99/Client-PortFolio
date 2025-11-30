import { logos_images } from "../../../components/constants";
import clientPost from "../../../assets/images/post.png";
import "./summary.css";

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
            <div className="col-12 col-md-6">
              <div className="mt-5">
                <h1>Strengths:</h1>
                <ul className="fs-5 ms-5  ">
                  <li>Addicted to machining.</li>
                  <li>Never lost to Magnus Carlsen in chess.</li>
                  <li>Like to design, build, and assemble everything.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mt-5">
                <h1>Weaknesses:</h1>
                <ul className="fs-5 ms-5">
                  <li>Addicted to machining.</li>
                  <li>4th year in a row to be cursed with laptop problems.</li>
                  <li>Really like to disassemble and break things.</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-5">
              <h1>Experience</h1>

              <div className="row justify-content-center align-items-center mt-4">
                {logos_images.map((items, index) => (
                  <div className="col-12 col-md-3 d-flex justify-content-center mb-3"key={index}>
                    <img src={items?.image}alt="logos" style={{width: "100%",maxWidth: "150px",height: "auto",}}/>
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
