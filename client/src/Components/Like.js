import * as React from "react";
import { getLikedCrosshairs, getCrosshairs } from "../Data/Api/actions";

export default ({ liked, setCrosshairs }) => {
  const [show, setShow] = React.useState(true);
  return (
    <div className="liked">
      {liked.length === 0 && "Recommended crosshairs we think you'd like:"}
      {liked.length > 0 && (
        <>
          <button
            className="liked__btn"
            onClick={() => {
              if (show) {
                setShow(false);
                getLikedCrosshairs(liked).then((res) => setCrosshairs(res));
              } else {
                setShow(true);
                getCrosshairs(1).then((res) => setCrosshairs(res));
              }
            }}
          >
            {show ? "View your liked crosshairs" : "Show all crosshairs"}
          </button>
        </>
      )}
    </div>
  );
};
