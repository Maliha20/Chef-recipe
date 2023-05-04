import React from "react";

import image1 from "../../../assets/Baesuk (Korean Pear Dessert, Two Ways).png";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/Bungeoppang.jpg";
import image4 from "../../../assets/dried persimon.jpg";
import image5 from "../../../assets/image3.jpg";
import image6 from "../../../assets/hotteok.jpg";
import image7 from "../../../assets/mochi.jpg";
import image8 from "../../../assets/sikhye.jpg";
import { Card, Col, Row } from "react-bootstrap";
import './ExtraSection2.css'

const ExtraSection2 = () => {
  return (
    <div className="my-5 container mx-auto">
        <h2 className=" text-center text-danger fs-2 fw-bold">Traditional Korean Desserts to try</h2>
      <Row>
        <Col>
          <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image1} />
            <Card.Body>
              <Card.Title className="text-danger fs-4">Baesuk</Card.Title>
              <Card.Text className="fs-5">
                Baesuk, 배숙 - poached pear or steamed pear is known in Korea to
                relieve cough or cold related symptoms. Originally, baesuk was served in Korean royal court cuisine, so that it was not spread to the public until the mid-20th century. Baesuk is also called isuk, and both terms literally mean "cooked pear" in Korean.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image2} />
            <Card.Body>
              <Card.Title className="text-danger fs-4">Bingsu</Card.Title>
              <Card.Text className="fs-5">
                Similar to ice cream, bingsu is made from frozen cream or milk.
                It's a type of Korean shaved ice where a block of frozen milk or
                cream is grated or shaved using a knife to create a fluffy,
                snow-like dessert. Bingsu normally comes with toppings on top of
                the mound of shaved ice.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image3} />
            <Card.Body>
              <Card.Title className="text-danger fs-4">Bungeoppang</Card.Title>
              <Card.Text className="fs-5">
                Bungeoppang has a light taste because of its thick and crisp
                dough made from flour and with an overall round shape. The color
                of its red bean filling cannot be seen from the outside.
                Ingeoppang has a tender and chewy taste with the addition of
                glutinous rice and butter to the flour dough.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
      </Row>
      <Row>
        <Col>
          <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image4} />
            <Card.Body>
              <Card.Title className="text-danger fs-4">Dried persimmon</Card.Title>
              <Card.Text className="fs-5">
                Dried persimmons are fantastic on their own, perhaps accompanied
                with a steaming cup of green tea. They're also an interesting
                addition to the cheeseboard and work very well chopped up in
                scones and almond biscotti.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image5} />
            <Card.Body>
              <Card.Title  className="text-danger fs-4">Dasik</Card.Title>
              <Card.Text className="fs-5">
                Dasik,다식 is made with all-natural ingredients like grains,
                beans, sesame seeds, chestnuts, pine pollen, and many other
                things. The ingredients are finely ground, mixed with honey, and
                pressed in a wooden mold into small cookies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
       
          <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image6} />
            <Card.Body>
              <Card.Title  className="text-danger fs-4">Hotteok</Card.Title>
              <Card.Text className="fs-5">
                Korean sweet pancakes, Hotteok are one of the most popular
                Korean street snacks. They are particularly popular in
                winter.Typically they are stuffed with dark brown sugar,
                cinnamon powder & some grounded nuts or seeds.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     
      </Row>
      
         <div className="d-flex flex-column flex-md-row justify-content-center gap-5">
         <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image8} />
            <Card.Body>
              <Card.Title  className="text-danger fs-4">Sikhye</Card.Title>
              <Card.Text className="fs-5">
                What does Sikhye taste like? Sikhye is one of the most popular
                Korean drinks. Its moderately sweet flavour and unique barley
                smell is liked by many who try it! I'm so excited about today's
                recipe Sikhye,식혜. It has been one of the most requested
                recipes by you guys as well.
              </Card.Text>
            </Card.Body>
          </Card>
       
          <Card className="card-height">
            <Card.Img className="dessert-img" variant="top" src={image7} />
            <Card.Body>
              <Card.Title  className="text-danger fs-4">Mochi</Card.Title>
              <Card.Text className="fs-5">
                Mochi has become one of the most aesthetically pleasing desserts
                in the world. It's the sweet and sticky ice cream that you will
                be seeing and hearing a lot about this summer, and for a good
                reason.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    
    </div>
  );
};

export default ExtraSection2;
