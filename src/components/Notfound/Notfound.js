import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Notfound = () => {
  return (
    <div
      style={{
        backgroundColor: '#fbd062',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container style={{ position: 'relative' }}>
        <div className="col-sm-12 d-flex flex-column align-items-center justify-content-center">
          <h1>Sorry, Not fond!</h1> <br />
          <Link to="/home">
            <Button variant="primary ">
              Back to Home <i class="fas fa-angle-double-right"></i>
            </Button>{' '}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Notfound;
