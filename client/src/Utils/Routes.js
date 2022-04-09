import Dashboard from "../Components/Routes/Dashboard";
import Privacy from "../Components/Routes/Privacy";
import Terms from "../Components/Routes/Terms";
const Error = () => <div>404</div>;

export default [
  { path: "/", name: "Dashboard", Component: Dashboard },
  { path: "/privacy-policy", name: "Information", Component: Privacy },
  { path: "/terms-of-service", name: "Terms", Component: Terms },
  { path: "*", name: "", Component: Error },
];
