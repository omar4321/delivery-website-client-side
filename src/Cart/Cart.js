import React, { useContext, useEffect, useState } from 'react';
import { CartInfo } from '../App';
import Footer from '../components/Footer/Footer';
import Navbarr from '../components/Navbarr';

const Cart = () => {
  const { cartId } = useContext(CartInfo);
  const [cartdetlis, setCartdetlis] = useState([]);

  // const filter = []

  useEffect(() => {
    fetch('/order.json')
      .then((res) => res.json())
      .then((data) => {
        setCartdetlis((prev) => [
          ...prev,
          ...data.filter((d) => {
            return cartId.indexOf(d.id) !== -1;
          }),
        ]);
      });
  }, [cartId]);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     const datamatch = cart.find((cart) => cart.id === id);
  //     setCartdetlis(datamatch);
  //   }
  // }, [cart, id]);
  console.log(cartdetlis);
  return (
    <>
      <Navbarr />
      {!cartdetlis ? (
        <h1>Loading...</h1>
      ) : (
        cartdetlis.map((detail) => <h1 key={detail.id}>{detail.name}</h1>)
      )}
      <Footer />
    </>
  );
};

export default Cart;
