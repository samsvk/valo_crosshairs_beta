import React from "react";
import Search from "./Search";
import { AiOutlineGithub } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Color from "./Colorpick";

export default React.memo(() => {
  return (
    <>
      <div className="info">
        <div className="info__label">What's new?</div>
        <div className="info__github">
          <AiOutlineGithub size={19} style={{ alignItems: "center" }} />
          <span>Just shipped beta 0.0.1</span>
          <MdKeyboardArrowRight size={20} style={{ alignItems: "center" }} />
        </div>
      </div>
      <header className="header">
        <div>
          <h1>copykat</h1>
          <p>
            Perform better with the best crosshairs. Browse and find your
            preference. The leightweight crosshair directory so you can see what
            top professional players are using.
          </p>
        </div>
        <div className="header__bottom">
          <Color />
          <Search />
        </div>
      </header>
    </>
  );
});
