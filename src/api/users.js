import http from '../utils/http';
import { format } from 'date-fns';

function formatUser(user) {
  //const dateCreatedAt = formatRelative(new Date(user.createdAt), new Date());
  const dateCreatedAt = `${format(
    new Date(user.createdAt),
    'MMMM'
  )} de ${format(new Date(user.createdAt), 'yyyy')}`;

  return {
    ...user,
    id: user._id,
    dateCreatedAt,
  };
}

export async function login({ username = '', password = '' }) {
  const response = await http.post(`/users/login`, {
    username,
    password,
  });
  const { data, message } = response.data;

  if (message === 'ok') {
    return Promise.resolve(data);
  } else {
    return Promise.reject(message);
  }
}

export async function getUser({ id }) {
  const response = await http.get(`/users/${id}`);
  const { data } = response.data;
  return formatUser(data);
}

export async function updateUser({
  id,
  name,
  username,
  email,
  password,
  passwordConfirmation,
}) {
  return await http.put(`/users/${id}`, {
    name,
    username,
    email,
    password,
    passwordConfirmation,
  });
}
