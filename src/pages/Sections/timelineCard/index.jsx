import { Link } from "react-router-dom";
import {data} from '../../../components/constants'
import "./timeline.css"; // custom CSS
export default function Timeline() {
  return (
    <div className="timeline-container position-relative mb-5">
      <div className="timeline-line"></div>

      {data.map((item, index) => (
        <div
          className={`timeline-item ${item?.side}`}
          key={index}>
          <div className="timeline-dot"><i className={item?.icon}></i></div>
          <div className="timeline-card card shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold date">{item?.date}</h6>
              <p className="location">{item?.location}</p>
              <h5 className="fw-bold title">{item?.title}</h5>
              <img src={item?.img} alt="img" className="img-fluid rounded mb-2"/>
              <p className="decs">{item?.desc}</p>
              <Link className="link-offset-2 link-underline link-underline-opacity-0"><p className="text-danger fs-5">Read More</p></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
