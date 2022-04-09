import * as React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord, SiTwitch } from "react-icons/si";
import { RiMoneyDollarCircleFill, RiInformationFill } from "react-icons/ri";
import { Link } from "react-router-dom";

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
        <Link to={"/information"}>
          <li>
            <RiInformationFill size={16} />
            <span>Information</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
