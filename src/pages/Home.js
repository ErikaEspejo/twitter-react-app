import React from 'react';
import { Helmet } from 'react-helmet';
import List from '../containers/List';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <List />
    </>
  );
}
