import * as React from "react";
import { getLikedCrosshairs } from "../Data/Api/actions";

export default ({ liked, setCrosshairs }) => {
  return (
    <div className="liked">
      {liked.length === 0 && "Recommended crosshairs we think you'd like:"}
      {liked.length > 0 && (
        <>
          Get your liked crosshairs -
          <button
            onClick={() =>
              getLikedCrosshairs(liked).then((res) => setCrosshairs(res))
            }
          >
            get liked
          </button>
        </>
      )}
    </div>
  );
};
