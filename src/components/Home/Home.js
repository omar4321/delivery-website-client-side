import React from 'react';
import Header from '../Header';
import About from '../About';
import Menu from '../Menu';
import Clients from '../Clients';
import Shop from '../Shop';
import Services from '../Services/Services';
import Viewpizza from '../Viewpizza/Viewpizza';
import ClientSection from '../ClientSection/ClientSection';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div id="home">
      <Header></Header>
      <About></About>
      <Clients></Clients>
      <Menu></Menu>
      <Shop></Shop>
      <Services></Services>
      <Viewpizza></Viewpizza>
      <ClientSection></ClientSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
