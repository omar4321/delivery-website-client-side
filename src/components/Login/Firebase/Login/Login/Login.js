import React, { useState } from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../../../../assets/images/facebook.png';
import google from '../../../../../assets/images/google.png';
import github from '../../../../../assets/images/github.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Navbarr from '../../../../Navbarr';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { allcontext } = useAuth();
  const {
    setUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    loginUser,
    setError,
  } = allcontext;
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  console.log(loginData);
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      <Navbarr> </Navbarr>
      <div className="text-center my-4">
        <h2>Please Login</h2>
        <p className=" mt-2">Login with Email & Password</p>
        <p className="text-danger text-center">{setError}</p>
        <div className="w-25 mx-auto">
          <Form onSubmit={handleLoginSubmit}>
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Email Address
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </InputGroup.Text>
                  <FormControl
                    onChange={handleOnChange}
                    type="email"
                    autoComplete="current-email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="text-start">
                <Form.Label htmlFor="password" visuallyHidden>
                  Your Password
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </InputGroup.Text>
                  <FormControl
                    onChange={handleOnChange}
                    type="password"
                    autoComplete="current-password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </InputGroup>
              </Col>
            </Row>

            <button type="submit" className="btn btn-primary mt-2 w-100">
              Login
            </button>
          </Form>
        </div>
        <p className="mt-2">
          <NavLink className="text-decoration-none" to="/signup">
            Need an Account? Please Sign up!
          </NavLink>
        </p>
        <p className="mt-3">Or</p>
        <p> Login with</p>
        <div>
          <button
            onClick={() => {
              signInWithGoogle()
                .then((result) => {
                  const user = result.user;
                  setUser(user);
                  history.push(url);
                })
                .catch((err) => {
                  const errorMessage = err.message;
                  setError(errorMessage);
                });
            }}
            className="btn"
          >
            <img src={google} width="46px" alt="google-icon" />
          </button>
          <button onClick={signInWithFacebook} className="btn">
            <img width="50px" src={facebook} alt="facebook-icon" />
          </button>
          <button className="btn">
            <img
              onClick={signInWithGithub}
              width="55px"
              src={github}
              alt="github-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
