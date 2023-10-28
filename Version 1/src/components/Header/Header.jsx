import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img from "./metagrowth_logo.png";

const Header = () => {
  return (
    <div className="mb-5">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div>
              <ul>
                {/* <li>
          <h1 className="text-center ml-6">MetaGrowth </h1></li> */}

                <Link to="/">
                  <img src={img}  alt="metagrowth" loading="lazy"  />
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
