import React, { useState } from "react";
import { Nav, NavItem, Collapse } from "reactstrap";
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
  let location = useLocation();
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);



  const toggleHelpDropdown = () => {
    setHelpDropdownOpen(!helpDropdownOpen);
  };



  return (
    <div className="bg-dark">
      <div className="mt-auto">
        <Nav vertical className="sidebarNav">
          <NavItem className="sidenav-bg">
            <Link
              to="/dashboard"
              className={
                location.pathname === "/dashboard-overview"
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className="bi bi-speedometer2"></i>
              <span className="ms-3 d-inline-block">Dashboard Overview</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link
              to="/user-list"
              className={
                location.pathname === "/user-list"
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className="bi bi-people"></i>
              <span className="ms-3 d-inline-block">All Users</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link
              to="/all-portfolio"
              className={
                location.pathname === "/all-portfolio"
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className="bi bi-bag"></i>
              <span className="ms-3 d-inline-block">Portfolios</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link
              to="/all-overview"
              className={
                location.pathname === "/all-overview"
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className="bi bi-people"></i>
              <span className="ms-3 d-inline-block">Customer Overview</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link
              to="/channels"
              className={
                location.pathname === "/channels"
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className="bi bi-phone"></i>
              <span className="ms-3 d-inline-block">Communication</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link
              to="/referral"
              className={
                location.pathname === "/referral"
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className="bi bi-people"></i>
              <span className="ms-3 d-inline-block">Referral Support</span>
            </Link>
          </NavItem>

          {/* Help and Support Dropdown */}
          <NavItem className="sidenav-bg">
            <Link
              to="#"
              onClick={toggleHelpDropdown}
              className={
                helpDropdownOpen ? "active nav-link py-3" : "nav-link py-3"
              }
            >
              <i className="bi bi-question-circle"></i>
              <span className="ms-3 d-inline-block">Help and Support</span>
              <i
                className={`bi ${
                  helpDropdownOpen ? "bi-caret-up" : "bi-caret-down"
                } ms-2 ms-auto`}
              ></i>
            </Link>

            {/* Collapse component for the Help and Support dropdown */}
            <Collapse isOpen={helpDropdownOpen}>
              <Nav vertical className="pl-4">
                <NavItem>
                  <Link
                    to="/contact"
                    className={
                      location.pathname === "/contact"
                        ? "active nav-link py-2"
                        : "nav-link py-2"
                    }
                  >
                    <span className="ms-3 d-inline-block">Contact</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/report-scam"
                    className={
                      location.pathname === "/report-scam"
                        ? "active nav-link py-2"
                        : "nav-link py-2"
                    }
                  >
                    <span className="ms-3 d-inline-block">Report Scam</span>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link
              to="/transaction-details"
              className={
                location.pathname === "/transaction-details"
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className="bi bi-file-earmark-text"></i>
              <span className="ms-3 d-inline-block">Transaction Details</span>
            </Link>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
