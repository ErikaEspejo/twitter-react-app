import React from 'react';
import { Helmet } from 'react-helmet';
import UserDetails from '../containers/UserDetails';

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <UserDetails />
    </>
  );
}
