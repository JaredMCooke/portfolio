import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);
  return (
    <>
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <div className="sidebar-container">
          <nav className="nav-items">
            <ul>
              <li>
                <Link className="nav-item" to="/experience">
                  <span className="line" />
                  experience
                </Link>
              </li>
              <li>
                <Link className="nav-item">
                  <span className="line" />
                  skills
                </Link>
              </li>
              <li>
                <Link className="nav-item">
                  <span className="line" />
                  education
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
