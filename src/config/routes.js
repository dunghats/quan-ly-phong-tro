import { Login, Statistics } from "../pages";

const routes = [
  { path: "/admin/statistics", page: Statistics },
  { path: "/admin/posts", page: "" },
  { path: "/admin/ads", page: "" },
  { path: "/admin/account", page: "" },
  { path: "/admin/users", page: "" },
  {
    path: "/admin/login",
    page: Login,
    layout: null,
  },
];

export default routes;
