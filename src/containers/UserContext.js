import React, { useState } from 'react';

const UserContext = React.createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const UserConsumer = UserContext.Consumer;

export { UserConsumer };

export default UserContext;
