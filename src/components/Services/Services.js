import React, { useEffect, useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch('https://calm-basin-01547.herokuapp.com/pizzaAdd')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container">
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
