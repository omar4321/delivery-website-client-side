import React from 'react';
import useAuth from '../../hooks/useAuth';
import ServiceContent from '../ServiceContent/ServiceContent';

const Services = () => {
  const { service } = useAuth();

  return (
    <div id="services" className="container">
      <h1 className="m-5 text-center">
        Choose your favorite pizza <i className="fas fa-pizza-slice"></i>
      </h1>
      <div className="row g-5">
        {service.map((service, _id) => (
          <ServiceContent service={service} key={_id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
