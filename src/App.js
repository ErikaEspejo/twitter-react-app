import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import ProtectedRoute from './containers/ProtectedRoute';
import UserBar from './containers/UserBar';
import { UserProvider } from './containers/UserContext';

const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));
const TweetDetails = React.lazy(() => import('./pages/TweetDetails'));
const Profile = React.lazy(() => import('./pages/Profile'));
const EditProfile = React.lazy(() => import('./pages/EditProfile'));

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

  return (
    <UserProvider>
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
              <ProtectedRoute path="/profile/:id" exact>
                <Profile />
              </ProtectedRoute>
              <ProtectedRoute path="/profile/:id/edit">
                <EditProfile />
              </ProtectedRoute>
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
    </UserProvider>
  );
}

export default App;
