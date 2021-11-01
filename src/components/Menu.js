import React from 'react';

const Menu = () => {
  return (
    <div id="menu" className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <button className="btn-button  btn-smart"> VIEW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
