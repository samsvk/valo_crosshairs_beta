import * as React from "react";
import { copyToClipboard, sleep } from "../Utils/Utils";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default React.memo(({ crosshair, likeCrosshair, removeLike }) => {
  const [show, setShow] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  return (
    <>
      <div className="crosshair">
        <div className={`crosshair__label ${show ? "show" : ""}`}>
          {!copied ? "Click to Copy ✍️" : "Copied! 😊"}
        </div>

        <div className="crosshair__img">
          <img
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
            src={crosshair.link}
          />
        </div>
        <div className="crosshair__details">
          <h5 className="crosshair__details__title">{crosshair.title}</h5>
          <h4
            className="crosshair__details__title like"
            onClick={() => likeCrosshair(crosshair._id)}
          >
            <AiOutlineHeart />
          </h4>
        </div>
      </div>
    </>
  );
});
