import * as React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord, SiTwitch } from "react-icons/si";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default () => {
  const data = [
    {
      name: "Twitter",
      url: "https://twitter.com/copykat",
      icon: <AiOutlineTwitter size={16} />,
    },
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
      </ul>
    </div>
  );
};
