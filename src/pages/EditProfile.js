import React from 'react';
import UserEdit from '../containers/UserEdit';
import { Helmet } from 'react-helmet';

export default function EditProfile() {
  return (
    <>
      <Helmet>
        <title>Edit Profile</title>
      </Helmet>
      <UserEdit />
    </>
  );
}
