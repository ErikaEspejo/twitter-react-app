import http from '../utils/http';
import { formatDistance } from 'date-fns';

function formatTweet(tweet) {
  const date = formatDistance(new Date(tweet.createdAt), new Date(), {
    addSuffix: true,
  });
  return {
    ...tweet,
    id: tweet._id,
    date,
  };
}

function formatTweets(tweets) {
  // return tweets.map((tweet) => formatTweet(tweet))
  return tweets.map(formatTweet);
}

export const getTweets = async () => {
  const response = await http.get(`/tweets`);
  const { data } = response.data;
  return formatTweets(data);
};

export const getTweet = async ({ id }) => {
  const response = await http.get(`/tweets/${id}`);
  const { data } = response.data;
  return formatTweet(data);
};
