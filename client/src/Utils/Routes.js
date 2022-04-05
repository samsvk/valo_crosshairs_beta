import Dashboard from "../Components/Routes/Dashboard";
const Error = () => <div>404</div>;

export default [
  { path: "/", name: "Dashboard", Component: Dashboard },
  { path: "*", name: "", Component: Error },
];
