import React from "react";
import logo from "../assets/images/fav-2.png";
import profile from "../assets/images/profile.png";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <header className="app-header">
        <a className="app-header__logo" href="index.html">
          <img className="w-25" src={logo} />
        </a>
        {/* Sidebar toggle button  */}
        <a
          className="app-sidebar__toggle"
          href="#"
          data-toggle="sidebar"
          aria-label="Hide Sidebar"
        ></a>
        {/* Navbar Right Menu  */}
        <ul className="app-nav">
          {/* User Menu */}
          <li className="dropdown">
            <a
              className="app-nav__item"
              href="#"
              data-bs-toggle="dropdown"
              aria-label="Open Profile Menu"
            >
              <i className="bi bi-person fs-4"></i>
            </a>
            <ul className="dropdown-menu settings-menu dropdown-menu-right">
              <li>
                <a className="dropdown-item" href="setting.php">
                  <i className="bi bi-gear me-2 fs-5"></i> Settings
                </a>
              </li>
              {/* <!-- <li><a className="dropdown-item" href="profile.php"><i className="bi bi-person me-2 fs-5"></i> Profile</a></li> --> */}
              <li>
                <a className="dropdown-item" href="login.php">
                  <i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      {/* Sidebar menu */}
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside className="app-sidebar">
        <div className="app-sidebar__user">
          <img
            className="app-sidebar__user-avatar"
            src={profile}
            alt="User Image"
          />
          <div>
            <p className="app-sidebar__user-name text-white"> Rob</p>
            <p className="app-sidebar__user-designation text-white">
              Admin Master
            </p>
          </div>
        </div>
        <ul className="app-menu">
          <li>
            <Link to={"/"} className="app-menu__item ">
              <i className="app-menu__icon fa-light fa-gauge-high"></i>{" "}
              <span className="app-menu__label">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/installer"} className="app-menu__item">
              <i className="app-menu__icon fa-light fa-screwdriver-wrench"></i>
              <span className="app-menu__label">Installer</span>
            </Link>
          </li>
          <li>
            <Link to={"/customer"} className="app-menu__item">
              <i className="app-menu__icon fa-sharp fa-light fa-users"></i>
              <span className="app-menu__label">Customer</span>
            </Link>
          </li>
          <li>
            <Link to={"/jobs"} className="app-menu__item">
              <i className="app-menu__icon fa-regular fa-bell"></i>
              <span className="app-menu__label">Jobs</span>
            </Link>
          </li>
          <li>
            <Link to={'/account-settings'} className="app-menu__item">
              <i className="app-menu__icon fa-regular fa-gear"></i>
              <span className="app-menu__label">Account Settings</span>
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="app-menu__item">
              <i className="app-menu__icon fa-light fa-right-from-bracket"></i>
              <span className="app-menu__label">Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Headers;
