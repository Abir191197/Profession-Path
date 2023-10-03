import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <React.Fragment>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link to="/" className=" normal-case text-2xl font-extrabold">
              <span className=" text-5xl">P</span>rofession{" "}
              <span className="text-5xl">P</span>ath
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-3  px-1">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : " ")}
                  to="/Home">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : " ")}
                  to="/Statistics">
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : " ")}
                  to="Applied Jobs">
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : " ")}
                  to="Blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary ">Star Applying</a>
          </div>
        </div>
      </React.Fragment>
    );
};

export default Header;