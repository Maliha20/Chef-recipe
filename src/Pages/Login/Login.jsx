import React, { useContext, useState, useSyncExternalStore } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const{user, SignInUser, GoogleSignIn, GithubSignIn} = useContext(AuthContext)
    const[success, setSuccess] =useState('')
    const[error, setError] =useState('')
    const [show,setShow] = useState(false)

    const handleLogin =(event)=>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        SignInUser(email,password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            setError('')
        })
        .catch(error =>{
            setError(error.message)
            setSuccess('')
        })
    }

    const handleGoogle =()=>{
       GoogleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('login successful')
            setError('')
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
            setSuccess('')
        })

    }

    const handleGithub =()=>{
        GithubSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('login successful')
            setError('')
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
            setSuccess('')
        })
    }
    
  return (
    <div className="mx-auto d-flex flex-column justify-content-center">
      <Container className="my-5 w-25 borderDesign rounded p-5">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <p onClick={()=> setShow(!show)}>
                {
                    show ? <FaEyeSlash className="text-danger"></FaEyeSlash> : <FaEye className="text-success"></FaEye>
                }
            </p>
          </Form.Group>
          <Form.Text className="text-danger my-2">
           {error}
          </Form.Text>
          <Form.Text className="text-success my-2">
          {success}
          </Form.Text>
          <div>
            <Button variant="warning" className="my-2 px-4" type="submit">
              Login
            </Button>
          </div>
        
        </Form>
        <div className="my-2 mx-auto">
          <Button onClick={handleGoogle} className="my-3" variant="outline-success">
            Login with Google
          </Button>
          <div>
            <Button onClick={handleGithub} className="mb-3" variant="outline-info">
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
