import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { CartInfo } from '../../App';

const ServiceContent = (props) => {
  const { img, name, description, price } = props.service || {};

  // const { setcartId } = useContext(CartInfo);

  // const handleDetails = (id) => {
  //   setcartId((prev) => [...prev, id]);
  // };

  return (
    <div className="col-lg-4 col-md-3 col-sm-6">
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <h5> price: {price}</h5>
          </div>
          <div className="d-flex align-items-center justify-content-around p-2 m-0">
            <div className="text-danger fs-4 m-0 p-2">
              {' '}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
              <i className="fas fa-star"></i>
            </div>
            <div>
              <Link to="/cart">
                {' '}
                <Button
                  // onClick={() => handleDetails(_id)}
                  variant="danger "
                >
                  Add{' '}
                  <span>
                    {' '}
                    <i className="fas fa-plus"></i>
                  </span>
                </Button>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
