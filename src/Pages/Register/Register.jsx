import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { registerVersion } from "firebase/app";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);

    createUser(email, password).then((result) => {
      const registeredUser = result.user;
      console.log(registeredUser);
      setError('')
      setSuccess('')
      if (!/(?=.*?[A-Z])/.test(password)) {
        setError("Please add at least one uppercase letter");
        return;
      } else if (!/(?=.*?[0-9])/.test(password)) {
        setError("Please add at least one number");
        return;
      } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        setError("Please add at least one special character");
        return;
      } else if (!/.{6,}/.test(password)) {
        setError("Password should not be less than 6 characters");
        return;
      }
      else if(password != confirm){
       setError('Your password did not match')
       return
      }
      else{
        setSuccess('Your registration is successfull')
        setError('')
      }
    });
  };
  return (
    <div className="mx-auto d-flex flex-column justify-content-center">
      <Container className="my-5 w-25 borderDesign rounded p-5">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter Photo Url"
            />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirm"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept terms and conditions" />
          </Form.Group>
          <Form.Text className="text-danger my-2">{error}</Form.Text>
          <br />
          <Form.Text className="text-success my-2">{success}</Form.Text>
          <br />
          <div>
            <Button variant="warning" className="my-2 px-4" type="submit">
              Register
            </Button>
          </div>
        </Form>
        <div className="my-2 mx-auto">
          <Form.Text className="text-secondary">
            Already Have An Account? <Link to="/login">Login</Link>
          </Form.Text>
        </div>
      </Container>
    </div>
  );
};

export default Register;
