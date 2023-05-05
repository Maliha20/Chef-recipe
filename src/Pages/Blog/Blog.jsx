import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import icon2 from "../../assets/icon2.png";
import {
  FaDownload,
  FaMedal,
  FaMehRollingEyes,
  FaSmileBeam,
} from "react-icons/fa";
import icon4 from "../../assets/icon4 (2).jpg";
import "./Blog.css";
import icon1 from "../../assets/icon.png";
import icon3 from "../../assets/icon3 (2).png";
import Pdf from "react-to-pdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ref = React.createRef();
const options = {
  orientation: "horizontal",
  unit: "px",
  format: [585, 825],
};
const Blog = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const handleLike1 = () => {
    setToggle1(!toggle1);
    toast("Thank you for your response! We will work on getting better");
  };
  const handleLike2 = () => {
    setToggle2(!toggle2);
    toast("Thank you for your response! We will work on getting better");
  };
  const handleLike3 = () => {
    setToggle3(!toggle3);
    toast("Thank you for your response! We will work on getting better");
  };
  const handleLike4 = () => {
    setToggle4(!toggle4);
    toast("Thank you for your response! We will work on getting better");
  };

  return (
    <Container className="my-5">
      <div className="d-flex flex-column flex-md-row justify-content-end">
        <div>
          <Pdf
            targetRef={ref}
            filename="Dan-Bam-Blog.pdf"
            options={options}
            x={0.5}
            y={0.5}
            scale={0.8}
          >
            {({ toPdf }) => (
              <Button className="dld-btn" onClick={toPdf} variant="outline-info">
                Download <FaDownload></FaDownload>
              </Button>
            )}
          </Pdf>
        </div>
      </div>
      <div ref={ref}>
        <h2 className="text-center text-danger fs-2 fw-bold">Our Thoughts</h2>
        <Row className="my-4 ">
          <Col lg={6}>
            <Card className="fixed-height mb-5">
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

                <p onClick={handleLike1}>
                  {toggle1 ? (
                    <FaMehRollingEyes className="position text-danger"></FaMehRollingEyes>
                  ) : (
                    <FaSmileBeam className=" position text-success"></FaSmileBeam>
                  )}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
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
                <p onClick={handleLike2}>
                  {toggle2 ? (
                    <FaMehRollingEyes className="position text-danger"></FaMehRollingEyes>
                  ) : (
                    <FaSmileBeam className=" position text-success"></FaSmileBeam>
                  )}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
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
                <p onClick={handleLike3}>
                  {toggle3 ? (
                    <FaMehRollingEyes className="position text-danger"></FaMehRollingEyes>
                  ) : (
                    <FaSmileBeam className=" position text-success"></FaSmileBeam>
                  )}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            
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
                <p onClick={handleLike4}>
                  {toggle4 ? (
                    <FaMehRollingEyes className="position text-danger"></FaMehRollingEyes>
                  ) : (
                    <FaSmileBeam className=" position text-success"></FaSmileBeam>
                  )}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={0}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Blog;
