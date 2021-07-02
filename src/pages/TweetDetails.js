import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tweet from '../components/Tweet';
import API from '../api';

export default function TweetDetails() {
  const { id } = useParams();
  const [tweet, setTweet] = useState(null);

  async function loadTweet() {
    try {
      const data = await API.getTweet({ id });
      if (data) {
        setTweet(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      loadTweet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    tweet && (
      <Tweet
        name={tweet.user.name}
        username={tweet.user.username}
        content={tweet.content}
        date={new Date(tweet.createdAt).toDateString()}
      />
    )
  );
}
