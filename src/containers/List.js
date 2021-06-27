import React, { useEffect, useState } from 'react';
import Tweet from '../components/Tweet';
import { API } from '../api';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getTweets().then((response) => setData(response));
  }, []);

  return (
    <>
      {data.map((item) => {
        const date = new Date(item.createdAt).toDateString();
        return (
          <Tweet
            key={item._id}
            name={item.user.name}
            username={item.user.username}
            date={date}
            content={item.content}
          />
        );
      })}
    </>
  );
};

export default List;
