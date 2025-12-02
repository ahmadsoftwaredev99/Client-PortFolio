import { socialData } from "../constants";
import './socialmedia.css'
const SocialMedia = () => {
  return (
    <>
      <div className="cards">
        <ul>
          {socialData.map((item, index) => (
            <li className="iso-pro" key={index}>
              <span></span>
              <span></span>
              <span></span>
              <a href={item?.link} target="_blank" >{item?.icon}</a>
              <div className="text">{item?.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialMedia;
