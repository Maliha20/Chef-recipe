import React from "react";
import { Carousel } from "react-bootstrap";
import food1 from '../../../assets/food1.jpg'
import food2 from '../../../assets/food2.jpg'
import food3 from '../../../assets/food3.jpg'
import './ExtraSection.css'


const ExtraSection = () => {
  return (
    <div className="my-5">
        <div>
            <h2 className="text-danger text-center my-5">Know Your Food</h2>
        </div>
      <Carousel className="container mx-auto my-5">
        <Carousel.Item>
          <img
            className="d-block img-size"
            src={food1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="food-slogan fs-1">Kimchi</h3>
            <p className="food-slogan fs-3">Kimchi is like a warm hug from an old friend</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-size"
            src={food2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="food-slogan fs-1">Tteokbokki</h3>
            <p className="food-slogan fs-3">Tteokbokki is like a gateway drug to Korean food</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-size"
            src={food3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="food-slogan fs-1">Bibimbap</h3>
            <p className="food-slogan fs-3">
            Bibimbap is like life. You take the good with the bad, mix it all together, and hope it's good in the end.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ExtraSection;
