import React from "react";
import Search from "./Search";

export default React.memo(() => {
  return (
    <header className="header">
      <div>
        <h1>Crosshairs.gg</h1>
        <p>
          Is a lightweight crosshair index/directory that aims to publish
          professionals crosshairs to the public. Perform better, with the best
          crosshairs. Browse and find crosshairs that fits your preference and
          see what top professional players are using.
        </p>
      </div>
      <div className="header__bottom">
        <Search />
      </div>
    </header>
  );
});
