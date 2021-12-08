import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOutUser } from '../api/auth';

function Navbar({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/teamview">
                  My Team
                </Link>
              </li>
              {user?.isCoach && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/create">
                    Create
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
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navbar.defaultProps = { user: null };

export default Navbar;
