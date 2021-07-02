import React from 'react';
import { isAuthenticated, clearSession } from '../utils/auth';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { NavLink, useHistory } from 'react-router-dom';

export default function UserBar() {
  const history = useHistory();

  return isAuthenticated() ? (
    <Button
      onClick={() => {
        clearSession();
        history.push('/login');
      }}
    >
      Logout
    </Button>
  ) : (
    <ListItem component={NavLink} to="/login" button>
      Login
    </ListItem>
  );
}
