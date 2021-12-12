import { useState, useEffect } from 'react';

const useCart = () => {
  const [orderPizza, setOrderPizza] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setOrderPizza(cart);
  }, []);
  function getCart() {
    let cart;
    const isHave = localStorage.getItem('cart');
    if (isHave) {
      cart = JSON.parse(isHave);
    } else {
      cart = [];
    }
    return cart;
  }
  function addToCart(service) {
    const newOrder = [...orderPizza, service];
    setOrderPizza(newOrder);
  }

  function remove(_id) {
    const newPizza = orderPizza.filter((pizza) => pizza._id !== _id);
    setOrderPizza(newPizza);
  }

  function Checkout() {
    alert('thank for Order ');
    setOrderPizza([]);
  }
  return { addToCart, orderPizza, remove, Checkout };
};

export default useCart;
