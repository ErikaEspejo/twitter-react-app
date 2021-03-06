import { Button, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import React, { useContext } from 'react';
import API from '../api';
import { setSession } from '../utils/auth';
import UserContext from '../containers/UserContext';

export default function AuthForm() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  async function onSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    try {
      const data = await API.login({
        username: username.value,
        password: password.value,
      });
      const { token } = data;
      setSession({ data: token });
      setUser(data);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          margin="normal"
          fullWidth
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
}
