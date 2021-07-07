import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MuiAlert from '@material-ui/lab/Alert';
import Tweet from '../components/Tweet';
import API from '../api';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const List = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();

  async function loadList() {
    try {
      const data = await API.getTweets();
      if (data) {
        setData(data);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  const displayTweet = ({ id }) => {
    history.push(`/tweets/${id}`);
  };

  async function onLike(event, id) {
    event.stopPropagation();
    try {
      await API.likeTweet({
        tweetId: id,
      });
      const tweet = await API.getTweet({ id });
      const newList = data.map((item) => {
        if (item.id === id) {
          // return {
          //   ...item,
          //   likes: item.likes + 1
          // };
          return tweet;
        } else {
          return item;
        }
      });
      setData(newList);
      // await loadList();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {data.map(({ id, user, date, content, comments, likes }) => {
        return (
          <div
            key={id}
            onClick={() => {
              displayTweet({ id });
            }}
          >
            <Tweet
              id={id}
              name={user.name}
              username={user.username}
              date={date}
              content={content}
              likes={likes}
              commentsCount={comments.length}
              onLike={onLike}
            />
          </div>
        );
      })}
    </>
  );
};

export default List;
