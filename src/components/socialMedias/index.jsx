  import { Link } from "react-router-dom";
import { socialMediaData } from "../constants";
import "./socialmedia.css";

const SocialMedia = () => {
  return (
    <div className="main">
      <div className="up">
        {socialMediaData.slice(0,2).map((item, index) => (
          <Link key={index} to={item.url} target="_blank" className={item.containerClass}>
            {item.svg}
          </Link>
        ))}
      </div>
      <div className="down">
        {socialMediaData.slice(2).map((item, index) => (
          <Link key={index} to={item.url} target="_blank" className={item.containerClass}>
            {item.svg}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
