import { useState } from 'react';

const useCart = () => {
  const [orderPizza, setOrderPizza] = useState([]);

  function addToCart(service) {
    
    const newOrder = [...orderPizza, service];
    setOrderPizza(newOrder);
  }
  return { addToCart, orderPizza };
};

export default useCart;
