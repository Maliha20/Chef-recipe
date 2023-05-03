import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto d-flex flex-column justify-content-center">
      <Container className="my-5 w-25 borderDesign rounded p-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Text className="text-muted my-2">
            We'll never share your email with anyone else.
          </Form.Text>
          <div>
            <Button variant="warning" className="my-2 px-4" type="submit">
              Login
            </Button>
          </div>
        
        </Form>
        <div className="my-2 mx-auto">
          <Button className="my-3" variant="outline-success">
            Login with Google
          </Button>
          <div>
            <Button className="mb-3" variant="outline-info">
              Login with Github
            </Button>
          </div>
          <Form.Text className="text-secondary">
            Don't Have An Account? <Link to="/register">Register</Link>
          </Form.Text>
        </div>
      </Container>
    </div>
  );
};

export default Login;
