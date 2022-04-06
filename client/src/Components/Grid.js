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

  return <div className="main">vvvv111</div>;
};
