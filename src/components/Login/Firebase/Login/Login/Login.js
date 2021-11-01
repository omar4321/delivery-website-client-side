import Button from 'react-bootstrap/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Navbarr from '../../../../Navbarr';
import { Container, Row } from 'react-bootstrap';

const Login = () => {
  const { signInUsingGoogle, setUsers, setIsloading, users } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((res) => {
        setIsloading(true);
        setUsers({
          ...users,
          email: res.user.email,
          displayName: res.user.displayName,
        });
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div>
      <Navbarr> </Navbarr>
      <Container>
        <Row>
          <div className="col-sm-12 text-center text-danger mt-5 fs-1 font-weight-bold text-uppercase">
            login your Account
          </div>

          <div className="col-sm-12">
            <div
              className="my-5 d-flex justify-content-center align-items-center p-3"
              style={{ border: '2px solid #ABABAB', height: '50vh' }}
            >
              <Row className="justify-content-center align-items-center">
                <div className="col-sm-12 text-center"></div>
                <Button
                  onClick={() => handleGoogleLogin()}
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #ABABAB',
                    color: '#000',
                  }}
                  className="px-5  d-flex justify-content-center align-items-center"
                >
                  <img
                    src="https://i.ibb.co/jRKzCQ5/Group-573.png"
                    className="mx-5"
                    alt="Google"
                  />
                  <span>Continue with Google</span>
                </Button>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
