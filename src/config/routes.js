import * as P from "../pages";

const routes = [
  { path: "/admin/statistics", page: P.CashFlow },
  { path: "/admin/login", page: P.Login, layout: null },
  { path: "/admin/users", page: P.Users },
  { path: "/admin/ads", page: P.Ads },
  { path: "/admin/posts", page: P.Posts },
  { path: "/admin/posts/:id", page: P.DetailPost },
];

export default routes;
