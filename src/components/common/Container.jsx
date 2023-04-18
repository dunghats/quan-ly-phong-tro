import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container-fluid position-relative d-flex p-0">
      {children}
    </div>
  );
};

export default Container;
