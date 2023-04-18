import React from "react";
import User from "../../assets/images/user.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
      <Link href="index.html" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0">
          <i className="fa fa-user-edit" />
        </h2>
      </Link>
      <Link href="#" className="sidebar-toggler flex-shrink-0">
        <i className="fa fa-bars" />
      </Link>
      <form className="d-none d-md-flex ms-4">
        <input
          className="form-control bg-dark border-0"
          type="search"
          placeholder="Search"
        />
      </form>
      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <Link
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-envelope me-lg-2" />
            <span className="d-none d-lg-inline-flex">Message</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <Link href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  // src="img/user.jpg"
                  alt=""
                  style={{ width: 40, height: 40 }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </Link>
            <hr className="dropdown-divider" />
            <Link href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  // src="img/user.jpg"
                  alt=""
                  style={{ width: 40, height: 40 }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </Link>
            <hr className="dropdown-divider" />
            <Link href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  // src="img/user.jpg"
                  alt=""
                  style={{ width: 40, height: 40 }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </Link>
            <hr className="dropdown-divider" />
            <Link href="#" className="dropdown-item text-center">
              See all message
            </Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <Link
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-bell me-lg-2" />
            <span className="d-none d-lg-inline-flex">Notificatin</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <Link href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Profile updated</h6>
              <small>15 minutes ago</small>
            </Link>
            <hr className="dropdown-divider" />
            <Link href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">New user added</h6>
              <small>15 minutes ago</small>
            </Link>
            <hr className="dropdown-divider" />
            <Link href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Password changed</h6>
              <small>15 minutes ago</small>
            </Link>
            <hr className="dropdown-divider" />
            <Link href="#" className="dropdown-item text-center">
              See all notifications
            </Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <Link
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <img
              className="rounded-circle me-lg-2"
              src={User}
              alt=""
              style={{ width: 40, height: 40 }}
            />
            <span className="d-none d-lg-inline-flex">John Doe</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <Link href="#" className="dropdown-item">
              My Profile
            </Link>
            <Link href="#" className="dropdown-item">
              Settings
            </Link>
            <Link href="#" className="dropdown-item">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
