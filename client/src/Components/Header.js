import React from "react";
import Search from "./Search";
import { AiOutlineGithub } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Color from "./Colorpick";
import Socials from "./Socials";

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
        <Socials />
      </div>
      <header className="header">
        <div>
          <h1>copykat</h1>
          <p>
            Copycat is the leightweight crosshair index built so you can play
            with what top pros are using. Perform better with the best
            crosshairs.
          </p>
        </div>
        <div className="header__aside">
          <Color />
          <Search />
        </div>
      </header>
    </>
  );
});
