import AOS from "aos";
import { Popover } from "antd";
import { useEffect } from "react";
import {data} from '../../../components/constants'
import "aos/dist/aos.css";
import "./timeline.css"; 
export default function Timeline() {
  useEffect(() => {
    AOS.init({
      duration: 500,      
      once: false,       
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="timeline-container position-relative mb-5">
      <div className="timeline-line"></div>
      {data.map((item, index) => (
        <div className={`timeline-item ${item?.side}`}
                data-aos={item?.animation}
          key={index}>
          <div className="timeline-dot"><i className={item?.icon}></i></div>
          <div className="timeline-card card ">
            <div className="card-body" >
              <h6 className="fw-bold date">{item?.date}</h6>
              <p className="location">{item?.location}</p>
              <h5 className="fw-bold title">{item?.title}</h5>
              <img src={item?.img} alt="img" className="img-fluid rounded mb-2"/>
              <p className="decs">{item?.desc}</p>
              <Popover content={item?.content} title='More Description' trigger='click'>
                <h6 className="link-offset-2 link-underline link-underline-opacity-0 text-danger" style={{cursor:'pointer'}}>Read More</h6>
              </Popover>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

