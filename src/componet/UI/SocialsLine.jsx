import React from "react";
import FlipLink from "./FlipLink";

function SocialsLine() {
  // Array of social links
  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/gupta-mann",
    },
    { name: "WhatsApp", href: "https://wa.me/916266725150" },
    { name: "Email", href: "mailto:manngupta923@gmail.com" },
    { name: "Github", href: "https://github.com/mann-gupta1" },
    { name: "LeetCode", href: "https://leetcode.com/m-g" },
  ];

  return (
    <div className=" item flex flex-col text-white gap-3">
      <h1 className="opacity-50 text-xs">SOCIALS</h1>
      <div className="flex gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlipLink>{social.name}</FlipLink>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialsLine;
