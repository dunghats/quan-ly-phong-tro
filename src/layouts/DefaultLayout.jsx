import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

// services
import Auth from "../services/auth";

// styles
import "../assets/styles/global.css";
import "../assets/styles/bootstrap.css";

// components
import Sidebar from "../components/feature/Sidebar";
import Container from "../components/common/Container";
import Loading from "../components/common//Loading";
import Navbar from "../components/feature/Navbar";

// roles
import { ROLES } from "../constants";
import { Login } from "../pages";

const DefaultLayout = ({ children }) => {
  const location = useLocation();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const getProfile = async () => {
    setLoading(true);

    try {
      const { data } = await Auth.profile();
      data && setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, [location]);

  if (loading) {
    return (
      <Container>
        <Sidebar />
        <div className="content">
          <Navbar />
          <div className="container-fluid pt-4 px-4">
            <Loading />
          </div>
        </div>
      </Container>
    );
  }

  if (user?.role === ROLES.ADMIN) {
    return (
      <Container>
        <Sidebar />
        <div className="content">
          <Navbar />
          <div className="container-fluid pt-4 px-4">{children}</div>
        </div>
      </Container>
    );
  }

  return <Login />;
};

export default DefaultLayout;
