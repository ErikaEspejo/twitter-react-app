import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';

import TweetDetails from './pages/TweetDetails';
import ProtectedRoute from './containers/ProtectedRoute';
import UserBar from './containers/UserBar';
import UserContext from './containers/UserContext';

const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Router>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <ListItem component={NavLink} to="/" button>
                <Typography variant="h6" className={classes.title}>
                  React Twitter
                </Typography>
              </ListItem>
              <UserBar />
            </Toolbar>
          </AppBar>
          <Container maxWidth="sm">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <ProtectedRoute path="/tweets/:id">
                  <TweetDetails />
                </ProtectedRoute>
                <ProtectedRoute path="/">
                  <Home />
                </ProtectedRoute>
              </Switch>
            </React.Suspense>
          </Container>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
