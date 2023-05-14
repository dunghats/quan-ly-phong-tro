import React, { useEffect, useState } from "react";
import User from "../../../src/assets/images/user.jpg";
import { Link, useLocation } from "react-router-dom";

// constants
import { menuList } from "../../../src/constants";

const Sidebar = () => {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    const { pathname } = location;
    setPath(pathname);
  }, [location]);

  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-white navbar-dark">
        <span className="navbar-brand mx-4 mb-3">
          <h3 style={{ color: "#f9ca00" }}>
            <i className="fa fa-user-edit me-2" />
            Quản trị
          </h3>
        </span>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src={User}
              alt=""
              style={{ width: 40, height: 40 }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">ADMIN</h6>
          </div>
        </div>
        <div className="navbar-nav w-100">
          {menuList.map((item, index) => (
            <Link
              to={item.url}
              className={`nav-item nav-link ${
                path.includes(item.url) ? "active" : ""
              }`}
              key={index}
            >
              <i className={item.icon}></i>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
