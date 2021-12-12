import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
const Navbarr = () => {
  const { allcontext, orderPizza } = useAuth();
  console.log(orderPizza);
  const { user, logOut } = allcontext;
  const { displayName, photoURL, email, uid } = user;

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            {' '}
            <h3>
              <span className="logo-1"> pizza</span>{' '}
              <span className="logo-2">Guy</span>{' '}
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center ">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Order Pizza
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#about">
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#menu">
                Menu
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#client">
                Client
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#Restaurant">
                Restaurant
              </Nav.Link>
              <Nav.Link as={HashLink} style={{ fontSize: '15px' }} to="/cart">
                <i class="fas fa-cart-plus"> </i>
                <span>{orderPizza.length} </span>
              </Nav.Link>

              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/dashboard"
                    className="text-white"
                  >
                    Dashboard
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: '40px',
                          borderRadius: '50%',
                        }}
                        src={photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center d-flex justify-content-center  align-items-center ">
                      <div>
                        <h6>{displayName}</h6>
                        <p className="m-0 ">{email}</p>
                        <button onClick={logOut} className="btn btn-primary">
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </NavDropdown>
                </>
              )}
              {uid === '5SR1S1fW76UBrzUJW0bjxdxcdo73' && (
                <Nav.Link as={HashLink} to="/admin" className="text-white">
                  Admin Panel
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
