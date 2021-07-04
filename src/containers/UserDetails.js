import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import API from '../api';

function CalendarIcon(props) {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
        <circle cx="7.032" cy="8.75" r="1.285"></circle>
        <circle cx="7.032" cy="13.156" r="1.285"></circle>
        <circle cx="16.968" cy="8.75" r="1.285"></circle>
        <circle cx="16.968" cy="13.156" r="1.285"></circle>
        <circle cx="12" cy="8.75" r="1.285"></circle>
        <circle cx="12" cy="13.156" r="1.285"></circle>
        <circle cx="7.032" cy="17.486" r="1.285"></circle>
        <circle cx="12" cy="17.486" r="1.285"></circle>
      </g>
    </SvgIcon>
  );
}

function EmailIcon(props) {
  return (
    <SvgIcon>
      <g>
        <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
      </g>
    </SvgIcon>
  );
}

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  async function loadUser() {
    try {
      const data = await API.getUser({ id });

      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      loadUser();
    }
  }, [id]);

  return (
    user && (
      <>
        <Typography variant="h4">Profile</Typography>
        <Typography variant="h6">{user.name}</Typography>
        <form>
          <Typography variant="subtitle2" gutterBottom>
            @{user.username}
          </Typography>
          <p>
            <EmailIcon /> {user.email} <CalendarIcon /> Se unió en{' '}
            {user.dateCreatedAt}
          </p>
          <p></p>
        </form>
      </>
    )
  );
}
