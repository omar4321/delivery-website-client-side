import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const { allcontext } = useAuth();
  const { user, loading } = allcontext;
  // console.log(loading);
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <Spinner className="text-center" animation="border" variant="danger" />
      </div>
    );
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
