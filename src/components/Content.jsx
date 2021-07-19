import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppContent = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: rgb(37, 37, 38);
  background-position: center;
  background-size: cover;
`;

export const AuthContext = createContext({
  login: {},
  updateLogin: () => {},
});

const Content = ({ children }) => {
  const [login, setLogin] = useState();
  const updateLogin = data => setLogin(data);

  return (
    <AuthContext.Provider value={{ login, updateLogin }}>
      <AppContent>{children}</AppContent>
    </AuthContext.Provider>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
