import * as React from "react";
import { SiDiscord } from "react-icons/si";
import { RiMoneyDollarCircleFill, RiFileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiShieldQuarter } from "react-icons/bi";

export default () => {
  const data = [
    {
      name: "Discord",
      url: "https://discord.gg/",
      icon: <SiDiscord size={14} />,
    },
    {
      name: "Donate",
      url: "https://twitch.tv/copykat",
      icon: <RiMoneyDollarCircleFill size={17} />,
    },
  ];
  return (
    <div className="socials">
      <ul>
        {data.map((social, index) => (
          <li className="socials__item" key={index}>
            {social.icon}
            <span>{social.name}</span>
          </li>
        ))}
        <Link to={"/privacy-policy"}>
          <li>
            <BiShieldQuarter size={16} />
            <span>Privacy</span>
          </li>
        </Link>
        <Link to={"/terms-of-service"}>
          <li>
            <RiFileFill size={16} />
            <span>Terms</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
