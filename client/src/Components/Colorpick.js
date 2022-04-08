import * as React from "react";

export default () => {
  const colors = [
    { color: "white", hex: "ffffff" },
    { color: "red", hex: "ff0000" },
    { color: "green", hex: "00ff00" },
    { color: "yellowgreen", hex: "bbff00" },
    { color: "greenyellow", hex: "f0ff00" },
    { color: "yellow", hex: "ffff00" },
    { color: "cyan", hex: "00ffff" },
    { color: "pink", hex: "ff00ff" },
    { color: "red", hex: "ff0000" },
  ];
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("");
  const random = Math.floor(Math.random() * colors.length);

  return (
    <div className="color">
      <div className="color__selector">
        <ul>
          {colors.map((clr, index) => (
            <li
              style={{ backgroundColor: `#${clr.hex}` }}
              className={`color__selector__item ${clr.color}`}
              key={index}
            ></li>
          ))}
          {/* <li className="color__selector__item white"></li>
          <li className="color__selector__item green"></li>
          <li className="color__selector__item yellowgreen"></li>
          <li className="color__selector__item greenyellow"> </li>
          <li className="color__selector__item yellow"></li>
          <li className="color__selector__item cyan"></li>
          <li className="color__selector__item pink"></li>
          <li className="color__selector__item red"></li> */}
        </ul>
      </div>
      <div
        className="color__picker"
        style={{ backgroundColor: `#${colors[random].hex}` }}
      ></div>
    </div>
  );
};
