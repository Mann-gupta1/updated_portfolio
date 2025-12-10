import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Magnetic from "../componet/gsap/Magnetic";

function Socials() {
  return (
    <div className="flex item z-50 w-full flex-col gap-6 lg:gap-8">
      <Magnetic>
        <a
          href="https://linkedin.com/in/gupta-mann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
          height={26}
          width={26}
            icon={faLinkedin}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://wa.me/916266725150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
          height={26}
          width={26}
            icon={faWhatsapp}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://github.com/mann-gupta1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            height={26}
          width={26}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
    </div>
  );
}

export default Socials;
