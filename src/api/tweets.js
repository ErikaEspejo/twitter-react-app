import { BASE_URL } from '../const';

export const getTweets = async () => {
  const response = await fetch(`${BASE_URL}/tweets`);
  const { data } = await response.json();
  return data;
};
