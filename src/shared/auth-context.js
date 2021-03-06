import React from 'react';

const authContext = React.createContext({
  userId: null,
  login: () => {},
  logout: () => {},
  checkTimeout: () => {}
});

export default authContext;
