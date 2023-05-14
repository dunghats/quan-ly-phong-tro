import React from "react";
import User from "../../assets/images/user.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-white navbar-dark sticky-top px-4 py-0">
      <Link href="index.html" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0">
          <i className="fa fa-user-edit" />
        </h2>
      </Link>
    </nav>
  );
};

export default Navbar;
