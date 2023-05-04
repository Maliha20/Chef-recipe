import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import icon2 from "../../assets/icon2.png";
import { FaDownload } from "react-icons/fa";
import icon4 from "../../assets/icon4 (2).jpg";
import "./Blog.css";
import icon1 from "../../assets/icon.png";
import icon3 from "../../assets/icon3 (2).png";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'horizontal',
    unit: 'px',
    format: [585,825]
};
const Blog = () => {
  return (
    <Container className="my-5">
    
      <div className="d-flex flex-column flex-md-row justify-content-end">
        <div>
          <Pdf targetRef={ref} filename="Dan-Bam-Blog.pdf" options={options} x={.5}
           y={.5} scale={0.8}>
            {({ toPdf }) => (
              <Button onClick={toPdf} variant="outline-info">
                Download <FaDownload></FaDownload>
              </Button>
            )}
          </Pdf>
        </div>
      </div>
      <div ref={ref}>
        <h2 className="text-center text-danger fs-2 fw-bold">Our Thoughts</h2>
        <Row className="my-4 ">
          <Col xs={6}>
            <Card className="fixed-height">
              <Card.Img className="blog-img" variant="top" src={icon2} />
              <Card.Body>
                <Card.Title className="fw-bold">
                  Controlled Vs Uncontrolled Components
                </Card.Title>
                <Card.Text className="fs-5">
                  In react, controlled components' data is controlled by their
                  parent components and is passed through props. Meanwhile,
                  uncontrolled components are independent and are in full
                  control over their behavior.
                </Card.Text>
                <Button className="position" variant="info">
                  Download <FaDownload></FaDownload>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className="fixed-height">
              <Card.Img className="blog-img" variant="top" src={icon4} />
              <Card.Body>
                <Card.Title className="fw-bold">
                  Prop Validation Using Proptypes
                </Card.Title>
                <Card.Text className="fs-5">
                  PropTypes is React's built in method that checks the data
                  passed through the parent component to the child component.
                  The property used for it is called "Proptype". If any data is
                  invalid It'll show a warning in the Js console.
                </Card.Text>
                <Button className="position" variant="info">
                  Download <FaDownload></FaDownload>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Card className="fixed-height">
              <Card.Img className="blog-img" variant="top" src={icon3} />
              <Card.Body>
                <Card.Title className="fw-bold">
                  Node js Vs Express js
                </Card.Title>
                <Card.Text className="fs-5">
                  Node.js is an open. It is used in server-side, which makes it
                  easier to work on both client side and server side using only
                  javascript. Express JS is a Node.js framework which was
                  developed to make coding easier, using node js.
                </Card.Text>
                <Button className="position" variant="info">
                  Download <FaDownload></FaDownload>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            {" "}
            <Card className="fixed-height">
              <Card.Img className="blog-img" variant="top" src={icon1} />
              <Card.Body>
                <Card.Title className="fw-bold">
                  Custom Hooks and Its Importance
                </Card.Title>
                <Card.Text className="fs-5">
                  Customs Hooks are reusable functions in react. It starts with
                  a "use" and can call other hooks. When you need a code that
                  may be ureused or to make any code simpler, you can use custom
                  hooks. It also speed up the rendering process cause custom
                  hooks do not render again and again while rending codes.
                </Card.Text>
                <Button className="position" variant="info">
                  Download <FaDownload></FaDownload>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Blog;
