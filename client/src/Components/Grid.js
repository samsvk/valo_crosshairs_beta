import * as React from "react";
import { getCrosshairs } from "../Data/Api/actions";
import useRender from "../Utils/useRender";

export default () => {
  const [crosshairs, setCrosshairs] = React.useState([]);

  React.useEffect(() => {
    getCrosshairs(1).then((res) => {
      setCrosshairs(res);
    });
  }, []);

  useRender("App");
  // console.log(crosshairs);
  // console.log(crosshairs?.data?.map((item) => item.title));
  return (
    <div className="main">{crosshairs?.data?.map((item) => item.title)}</div>
  );
};
