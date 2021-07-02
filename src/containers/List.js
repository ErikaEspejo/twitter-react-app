import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Tweet from '../components/Tweet';
import API from '../api';

const List = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

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

  const displayTweet = ({ id }) => {
    history.push(`/tweets/${id}`);
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <>
      {data.map((item) => {
        const date = new Date(item.createdAt).toDateString();
        return (
          <div
            key={item._id}
            onClick={() => {
              displayTweet({ id: item._id });
            }}
          >
            <Tweet
              name={item.user.name}
              username={item.user.username}
              date={date}
              content={item.content}
            />
          </div>
        );
      })}
    </>
  );
};

export default List;
