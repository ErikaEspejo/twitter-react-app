import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tweet from '../components/Tweet';
import API from '../api';

const useStyles = makeStyles((theme) => ({
  spacer: {
    padding: theme.spacing(1),
  },
}));

export default function TweetDetails() {
  const classes = useStyles();
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

  async function onComment(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    try {
      await API.createComment({
        tweetId: id,
        comment: comment.value,
      });
      await loadTweet();
      comment.value = '';
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

  if (!tweet) return null;

  return (
    <>
      {tweet && (
        <Tweet
          name={tweet.user.name}
          username={tweet.user.username}
          content={tweet.content}
          date={tweet.date}
        />
      )}
      <form onSubmit={onComment}>
        <div className={classes.spacer} />
        <TextField
          label="Comment"
          multiline
          rows={4}
          name="comment"
          variant="outlined"
          required
          fullWidth
          autoFocus
        />
        <div className={classes.spacer} />
        <Button variant="contained" color="primary" type="submit">
          Comment
        </Button>
      </form>
      {tweet.comments.map(({ _id, comment, user }) => (
        <React.Fragment key={_id}>
          <div className={classes.spacer} />
          <Paper className={classes.spacer}>
            <p>{comment}</p>
            <p>
              {user.name} - @{user.username}
            </p>
          </Paper>
        </React.Fragment>
      ))}
    </>
  );
}
