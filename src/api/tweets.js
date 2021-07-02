import { BASE_URL } from '../const';

export const getTweets = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/tweets`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();
  return data;
};

export const getTweet = async ({ id }) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/tweets/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();
  return data;
};
