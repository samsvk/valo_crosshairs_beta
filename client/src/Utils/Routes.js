import Dashboard from "../Components/Routes/Dashboard";
import Information from "../Components/Routes/Information";
const Error = () => <div>404</div>;

export default [
  { path: "/", name: "Dashboard", Component: Dashboard },
  { path: "/information", name: "Information", Component: Information },
  { path: "*", name: "", Component: Error },
];
