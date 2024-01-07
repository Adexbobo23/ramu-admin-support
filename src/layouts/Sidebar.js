import React, { useState } from "react";
import { Nav, NavItem, Collapse } from "reactstrap";
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
  let location = useLocation();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [stockDropdownOpen, setStockDropdownOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [emailTemplateDropdownOpen, setEmailTemplateDropdownOpen] = useState(false);

  // Function to toggle the Role Management dropdown
  const toggleRoleDropdown = () => {
    setRoleDropdownOpen(!roleDropdownOpen);
  };

  const toggleStockDropdown = () => {
    setStockDropdownOpen(!stockDropdownOpen);
  };

  const toggleHelpDropdown = () => {
    setHelpDropdownOpen(!helpDropdownOpen);
  };

  const toggleBlogDropdown = () => {
    setBlogDropdownOpen(!blogDropdownOpen);
  };

  const toggleEmailTemplateDropdown = () => {
    setEmailTemplateDropdownOpen(!emailTemplateDropdownOpen);
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
