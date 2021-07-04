import React, { useContext } from 'react';
import { isAuthenticated, clearSession } from '../utils/auth';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { NavLink, useHistory } from 'react-router-dom';
import UserContext, { UserConsumer } from '../containers/UserContext';

export default function UserBar() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  return isAuthenticated() ? (
    <>
      <UserConsumer>
        {({ user }) => (
          <ListItem component={NavLink} to={`/profile/${user.id}`} button>
            {user.name}
          </ListItem>
        )}
      </UserConsumer>
      <Button
        onClick={() => {
          clearSession();
          setUser({});
          history.push('/login');
        }}
      >
        Logout
      </Button>
    </>
  ) : (
    <ListItem component={NavLink} to="/login" button>
      Login
    </ListItem>
  );
}
