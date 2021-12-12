import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const { allcontext } = useAuth();
  const { user, isloading } = allcontext;
  if (isloading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
