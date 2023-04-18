import DefaultLayout from "./layouts/DefaultLayout";
import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./config/routes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          const { path } = route;
          const Page = route.page;
          const Layout = route.layout
            ? route.layout
            : route.layout === null
            ? Fragment
            : DefaultLayout;
          return (
            <Route
              path={path}
              key={index}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
