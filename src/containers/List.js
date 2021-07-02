import React, { useEffect, useState } from 'react';
import Tweet from '../components/Tweet';
import API from '../api';

const List = () => {
  const [data, setData] = useState([]);

  async function loadList() {
    try {
      const data = await API.getTweets();
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadList();
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
