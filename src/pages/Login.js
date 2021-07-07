import React from 'react';
import { Helmet } from 'react-helmet';
import AuthForm from '../containers/AuthForm';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AuthForm />
    </>
  );
}
