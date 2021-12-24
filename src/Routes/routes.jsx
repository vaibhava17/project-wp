import AppNav from "../Components/AppNav/AppNav";
import Home from "../Pages/Home";

const routesMapping = [
  {
    path: "/",
    Component: Home,
    AppNav: AppNav,
    withAppLayout: true,
  },
];

export default routesMapping;
