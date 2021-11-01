import React from 'react';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO Pizza Guy</h1>
            <p>
              pizza Guy is an online pizza delivery platform brand owned by
              Delivery Hero
            </p>
            <div className="about__btn">
              <button className="btn-button  btn-smart"> READ MORE </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
