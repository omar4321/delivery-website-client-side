import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbarr from '../components/Navbarr';
import useAuth from '../hooks/useAuth';

const Cart = () => {
  const { orderPizza, remove, Checkout } = useAuth();
  const totalprice = orderPizza.reduce(
    (total, pizza) => total + pizza.price,
    0
  );
  return (
    <>
      <Navbarr />
      <div>
        <Container>
          {orderPizza.length ? (
            <Row>
              <Col md={9}>
                {orderPizza.map((pizza) => (
                  <Row style={{ width: '18rem' }}>
                    <img
                      src={pizza.img}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{pizza.name}</h5>
                      <p className="card-text">{pizza.description}</p>
                      <h5> price: {pizza.price}</h5>
                    </div>
                    <Button
                      variant="primary "
                      onClick={() => remove(pizza._id)}
                    >
                      Remove <i class="fas fa-angle-double-right"></i>
                    </Button>{' '}
                  </Row>
                ))}
              </Col>
              <Col className="text-center" md={3}>
                <h4> Total {orderPizza.length}</h4>
                <h6> total price:{totalprice} $</h6>
                <Button variant="primary " onClick={() => Checkout()}>
                  Checkout <i class="fas fa-angle-double-right"></i>
                </Button>{' '}
              </Col>
            </Row>
          ) : (
            <div className="text-center">
              {' '}
              <h1>No order selected</h1>{' '}
            </div>
          )}
          <div className="d-flex align-items-center justify-content-center">
            {' '}
            <Link to="/services">
              <Button variant="primary ">
                Order More <i class="fas fa-angle-double-right"></i>
              </Button>{' '}
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
