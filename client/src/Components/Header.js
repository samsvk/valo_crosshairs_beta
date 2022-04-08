import React from "react";
import Search from "./Search";
import { AiOutlineGithub } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

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
          <h1>Crosshairs.gg</h1>
          <p>
            Is a lightweight crosshair index/directory that aims to publish
            professionals crosshairs to the public. Perform better, with the
            best crosshairs. Browse and find crosshairs that fits your
            preference and see what top professional players are using.
          </p>
        </div>
        <div className="header__bottom">
          <Search />
        </div>
      </header>
    </>
  );
});
