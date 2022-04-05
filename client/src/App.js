import "./app.scss";
import { Routes as Switch, Route } from "react-router-dom";
import Routes from "./Utils/Routes";

export default () => {
  return (
    <Switch>
      {Routes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Switch>
  );
};
