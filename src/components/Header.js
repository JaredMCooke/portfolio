import React from "react";

function Header({ title }) {
  return (
    <div className="row">
      <h2 className="header">{title}</h2>
    </div>
  );
}

export default Header;
