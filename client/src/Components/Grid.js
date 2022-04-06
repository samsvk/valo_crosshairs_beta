import * as React from "react";
import { getCrosshairs } from "../Data/Api/actions";
import useRender from "../Utils/useRender";
import Crosshair from "./Crosshair";

export default () => {
  const [crosshairs, setCrosshairs] = React.useState([]);

  React.useEffect(() => {
    getCrosshairs(1).then((res) => {
      setCrosshairs(res);
    });
  }, []);

  useRender("App");
  return (
    <div className="crosshair__grid">
      {crosshairs?.data?.map((crosshair, index) => (
        <Crosshair key={index} crosshair={crosshair} />
      ))}
    </div>
  );
};
