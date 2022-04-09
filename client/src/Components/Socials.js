import * as React from "react";

export default () => {
  const data = [
    { name: "twitter", url: "https://twitter.com/copykat" },
    { name: "discord", url: "https://discord.gg/" },
    { name: "twitch", url: "https://twitch.tv/copykat" },
  ];
  return (
    <div className="socials">
      {data.map((social, index) => (
        <div key={index}>{social.name}</div>
      ))}
    </div>
  );
};
