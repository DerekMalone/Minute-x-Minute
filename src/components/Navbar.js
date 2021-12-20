import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

  const NavStyle = styled.div`
    margin: 0;

    .Navbar {
    }
  `;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavStyle>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Minute x Minute</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            {user.isCoach ? (
              <>
                <NavItem>
                  <NavLink href="/teamview">My Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/practiceview/:practice">Practices</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/drillview/:drill">Drills</NavLink>
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
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/playerTeamsView">My Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/playerPracticesView">Practices</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/playerDrillsView">Drills</NavLink>
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
              </>
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
    </NavStyle>
  );
}

MinxMinNavbar.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

MinxMinNavbar.defaultProps = { user: null };

export default MinxMinNavbar;
