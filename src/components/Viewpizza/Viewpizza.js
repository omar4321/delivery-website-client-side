import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './view.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Viewpizza = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="Restaurant">
      <div className="workBackground" id="workBackground">
        <Container className="my-5 py-5 text-center">
          <Row>
            <div className="col-sm-12 my-5 Heading">
              <h1>
                <span id="first"> Our listed</span>{' '}
                <span id="last"> Restaurant</span>
              </h1>
            </div>
            <div className="col-sm-12 py-5">
              <Slider {...settings}>
                <div className="img col-sm-12">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/0b/f9/f7/68/front-od-domino-s-crestwood.jpg"
                    alt="carousel-1"
                  />
                </div>
                <div className="img col-sm-12">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/12/04/68/38/pizza-hut-at-casino-royale.jpg"
                    alt="carousel-2"
                  />
                </div>
                <div className="img col-sm-12">
                  <img
                    src="https://cdn.images.express.co.uk/img/dynamic/14/590x/secondary/Food-2535365.webp?r=1596897068365"
                    alt="carousel-3"
                  />
                </div>
                <div className="img col-sm-12">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWjzPsBS_qu7DcApS3HbncGe3W4Uuy1TyaGsrPvtrSvr9EB7aUGcLPJd3HOttuHUHmEw&usqp=CAU"
                    alt="carousel-4"
                  />
                </div>
                <div className="img col-sm-12">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUYo77YzYYO35HcJecVpuGQEGZ7jsYpQ2Tg&usqp=CAU"
                    alt="carousel-5"
                  />
                </div>
              </Slider>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Viewpizza;
