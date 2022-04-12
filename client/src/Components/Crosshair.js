import * as React from "react";
import useRender from "../Utils/useRender";
import { copyToClipboard, sleep } from "../Utils/Utils";

export default React.memo(({ crosshair, likeCrosshair }) => {
  const [show, setShow] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  return (
    <>
      <div className="crosshair" onClick={() => likeCrosshair(crosshair._id)}>
        <div className={`crosshair__label ${show ? "show" : ""}`}>
          {!copied ? "Click to Copy ✍️" : "Copied! 😊"}
        </div>

        <div
          className="crosshair__img"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => {
            setCopied(true);
            copyToClipboard(crosshair.import);
            sleep(2000).then(() => {
              setShow(false);
              sleep(150).then(() => {
                setCopied(false);
              });
            });
          }}
        >
          <img src={crosshair.link} />
        </div>
        <div className="crosshair__details">
          <h5 className="crosshair__details__title">{crosshair.title}</h5>
        </div>
      </div>
    </>
  );
});
