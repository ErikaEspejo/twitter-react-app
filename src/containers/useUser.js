import { useState, useEffect } from 'react';
import API from '../api';

export default function useUser({ id }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    user,
  };
}
