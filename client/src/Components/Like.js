import * as React from "react";
import { getLikedCrosshairs } from "../Data/Api/actions";

export default ({ liked, setCrosshairs }) => {
  return (
    <div className="liked">
      {liked.length === 0 && "Recommended crosshairs we think you'd like:"}
      {liked.length > 0 && (
        <>
          <button
            className="liked__btn"
            onClick={() =>
              getLikedCrosshairs(liked).then((res) => setCrosshairs(res))
            }
          >
            See previously used crosshairs{" "}
          </button>
        </>
      )}
    </div>
  );
};
