import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
const Navbarr = () => {
  const { users, logOut } = useAuth();

  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            {' '}
            <h3>
              <span className="logo-1"> pizza</span>{' '}
              <span className="logo-2">Guy</span>{' '}
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
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
            <Nav.Link as={HashLink} to="/admin">
              Admin
            </Nav.Link>
            {users?.displayName ? (
              <Button onClick={logOut} variant="danger">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              Signed in as: {users ? users.displayName : ''}
            </Navbar.Text>
            <Nav.Link as={Link} to="/cart">
              <i id="icon" className="fas fa-cart-plus ">
                {'0 '}
              </i>{' '}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
