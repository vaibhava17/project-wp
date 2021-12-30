import AppNav from "../Components/AppNav/AppNav";
import AppFooter from "../Components/AppFooter/AppFooter";
import Home from "../Pages/Home";

const routesMapping = [
  {
    path: "/",
    Component: Home,
    AppNav: AppNav,
    AppFooter: AppFooter,
    withAppLayout: true,
  },
];

export default routesMapping;
