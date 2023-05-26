import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return <main className="layout-container">{children}</main>;
}

export default Layout;
