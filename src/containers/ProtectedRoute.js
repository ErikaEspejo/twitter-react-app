import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

export default function ProtectedRoute({ path = '/', children }) {
  const logged = isAuthenticated();

  return (
    <Route path={path}>{logged ? children : <Redirect to="/login" />}</Route>
  );
}
