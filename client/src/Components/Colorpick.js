import * as React from "react";

export default () => {
  const colors = [
    { color: "white", hex: "ffffff" },
    { color: "green", hex: "00ff00" },
    { color: "yellowgreen", hex: "bbff00" },
    { color: "greenyellow", hex: "f0ff00" },
    { color: "yellow", hex: "ffff00" },
    { color: "cyan", hex: "00ffff" },
    { color: "pink", hex: "ff00ff" },
    { color: "red", hex: "ff0000" },
  ];
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  return (
    <div className="color">
      {open && (
        <>
          <div className="color__selector">
            <div className="color__selector__hex">
              <p>HEX</p>
              <div className="color__selector__hex__label">#{color.hex}</div>
            </div>
            <ul>
              {colors.map((clr, index) => (
                <li
                  onClick={() => setColor(clr)}
                  style={{ backgroundColor: `#${clr.hex}` }}
                  className={`color__selector__item ${clr.color}`}
                  key={index}
                ></li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div
        onClick={() => setOpen((p) => !p)}
        className="color__picker"
        style={{ backgroundColor: `#${color.hex}` }}
      ></div>
    </div>
  );
};
