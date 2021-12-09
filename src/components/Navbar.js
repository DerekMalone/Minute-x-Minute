import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { signOutUser } from '../api/auth';

function MinxMinNavbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Minute x Minute</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            {user ? (
              <>
                <NavItem>
                  <NavLink href="/">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/teamview">My Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/teamForm">Team Form</NavLink>
                </NavItem>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={signOutUser}
                  >
                    Logout
                  </button>
                </li>
                {/* <NavItem>
                  <NavLink href="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projectsForm">Projects Form</NavLink>
                </NavItem> */}
              </>
            ) : (
              'Nothing here'
              // <>
              //   <NavItem>
              //     <NavLink href="//teamview">Teams</NavLink>
              //   </NavItem>
              //   <NavItem>
              //     <NavLink href="/contact">Contact Info</NavLink>
              //   </NavItem>
              //   <NavItem>
              //     <NavLink href="/tech">Tech Stacks</NavLink>
              //   </NavItem>
              //   <NavItem>
              //     <NavLink href="/projects">Projects</NavLink>
              //   </NavItem>
              // </>
            )}
          </Nav>
        </Collapse>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Minute x Minute
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/teamview">
                    My Team
                  </Link>
                </li>
                {user?.isCoach && (
                  <li className="nav-item">
                    <Link className="nav-link active" to="/teamForm">
                      Team Form
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <Link className="nav-link active" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                {user ? (
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={signOutUser}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link active" to="/sign-in">
                      Sign In
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Collapse>
      </nav> */}
    </div>
  );
}

MinxMinNavbar.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

MinxMinNavbar.defaultProps = { user: null };

export default MinxMinNavbar;
