import React, { useState, useEffect } from "react";
import { useAuthState } from "../contexts/AuthContext";

const Navbar = () => {
  const [accountBtn, setAccountBtn] = useState("login");
  const { name } = useAuthState().user;
  useEffect(() => {
    if (name !== "Stranger") setAccountBtn("home");
  }, [name]);
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-lg">
        <a href="/" className="navbar-brand">
          <span className="fw-bold text-secondary">UserAuth</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/notifications" className="nav-link">
                <i className="bi bi-bell-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href={`/${accountBtn}`} className="nav-link">
                <i className="bi bi-person-circle"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
