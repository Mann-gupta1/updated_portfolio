import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp, faLinkedin, faMedium, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Magnetic from "../componet/gsap/Magnetic";
import { links } from "../assest/data/profile";

function Socials() {
  return (
    <div className="flex item z-50 w-full flex-col gap-6 lg:gap-8">
      <Magnetic>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[28px] min-w-[28px]"
          aria-label="LinkedIn profile"
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
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[28px] min-w-[28px]"
          aria-label="WhatsApp"
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
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[28px] min-w-[28px]"
          aria-label="GitHub profile"
        >
          <FontAwesomeIcon
            icon={faGithub}
            height={26}
          width={26}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href={links.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[28px] min-w-[28px]"
          aria-label="Medium articles"
        >
          <FontAwesomeIcon
            icon={faMedium}
            height={26}
            width={26}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[28px] min-w-[28px]"
          aria-label="X profile"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
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
