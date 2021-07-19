import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AuthContext } from '../components/AppContext';
import LoginForm from '../components/LoginForm';

const API_URL = 'https://dev.tuten.cl/TutenREST/rest/user/';

const AppContent = styled.div`
  display: flex;
  width: inherit;
  height: 100vh;
  justify-content: center;
  background-color: rgb(37, 37, 38);
  background-position: center;
  background-size: cover;
`;

const Content = () => {
  const [loginForm, setLoginForm] = useState({
    app: 'APP_BCK',
    user: '',
    password: '',
  });
  const { updateLogin } = useContext(AuthContext);

  const handleChange = input => e => {
    setLoginForm({
      ...loginForm,
      [input]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const config = {
      headers: {
        password: loginForm.password,
        app: loginForm.app,
      },
    };

    axios
      .put(`${API_URL}${loginForm.user}`, undefined, config)
      .then(res => updateLogin(res.data));
  };

  return (
    <AppContent>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={loginForm}
      />
    </AppContent>
  );
};

export default Content;
