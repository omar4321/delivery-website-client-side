import { useState, useEffect } from 'react';

const useService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch('https://calm-basin-01547.herokuapp.com/pizzaAdd')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return { service, setService };
};

export default useService;
