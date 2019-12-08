import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faTwitter,
  faGoogle,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

const SocialMedia = () => {
  return (
    <div className="socialMedia-cont">
      <a
        href="https://github.com/rafaelbotello"
        target="blank"
        className="icon gplus-ic"
      >
        <FontAwesomeIcon
          className="limit"
          icon={faGithub}
          color="#3D4B5B"
          size="3x"
        />
      </a>
      <a href="https://facebook.com" target="blank" className="icon fb-ic">
        <FontAwesomeIcon
          className="limit"
          icon={faFacebookF}
          color="#1877f2"
          size="3x"
        />
      </a>
      <a
        href="https://twitter.com/RafaelBotello7"
        target="blank"
        className="icon tw-ic"
      >
        <FontAwesomeIcon
          className="limit"
          icon={faTwitter}
          color="#1da1f2"
          size="3x"
        />
      </a>
      <a
        href="https://www.instagram.com/jimmyplox/?hl=en"
        target="blank"
        className="icon ins-ic"
      >
        <FontAwesomeIcon
          className="limit"
          icon={faInstagram}
          color="#c32aa3"
          size="3x"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rafael-botello-994350190/"
        target="blank"
        className="icon pin-yt"
      >
        <FontAwesomeIcon
          className="limit"
          icon={faLinkedin}
          color="#007bb5"
          size="3x"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
