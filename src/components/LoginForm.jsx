import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid-v5';
import FormTemplate from './FormTemplate';
import FormInput from './FormInput';
import { device } from '../assets/mediaSizes.js';

const FormCard = styled(Grid)`
  width: 40%;
  height: auto;
  align-self: center;
  padding: 1rem 0;
  background-color: rgb(255, 255, 255);
  border-radius: 0.3rem;
  grid-gap: 1rem;
  text-align: center;

  @media only screen and ${device.desktopS} {
    font-size: 0.8rem;
    grid-gap: 0.75rem;
  }

  @media only screen and ${device.tablet} {
    width: 60%;
    font-size: 0.7rem;
    grid-gap: 0.5rem;
  }

  @media only screen and ${device.mobileL} {
    width: 80%;
    font-size: 0.7rem;
    grid-gap: 0.4rem;
  }

  @media only screen and ${device.mobileM} {
    width: 85%;
    font-size: 0.6rem;
    grid-gap: 0.3rem;
  }

  @media only screen and ${device.mobileS} {
    width: 90%;
    font-size: 0.6rem;
    grid-gap: 0.3rem;
  }
`;

const Button = styled.button`
  width: 50%;
  height: 3rem;
  padding: 0.25rem 1rem;
  border: none;
  margin: auto;
  background-color: ${props => props.color};
  border-radius: 3px;
  color: rgb(0, 0, 0);

  @media only screen and ${device.desktopS} {
    height: 2.75rem;
    padding: 0.2rem 0.8rem;
  }

  @media only screen and ${device.tablet} {
    height: 2.5rem;
    padding: 0.15rem 0.7rem;
  }

  @media only screen and ${device.mobileL} {
    height: 2.5rem;
    padding: 0.15rem 0.7rem;
    font-size: 0.8rem;
  }

  @media only screen and ${device.mobileM} {
    height: 2.25rem;
    padding: 0.1rem 0.6rem;
    font-size: 0.7rem;
  }

  @media only screen and ${device.mobileS} {
    height: 2.25rem;
    padding: 0.1rem 0.6rem;
    font-size: 0.7rem;
  }
`;

const LoginForm = props => {
  return (
    <FormCard columns={1}>
      <Cell middle center height={3}>
        <h1>Login</h1>
      </Cell>
      <FormTemplate>
        <FormInput
          name="lEmail"
          onChange={props.handleChange('user')}
          placeholder="Correo electrónico"
          type="email"
          value={props.value.user}
        />
        <FormInput
          name="lPassword"
          onChange={props.handleChange('password')}
          placeholder="Contraseña"
          type="password"
          value={props.value.password}
        />
      </FormTemplate>
      <Cell middle center height={3}>
        <Button color="rgb(38, 208, 76)" onClick={props.handleSubmit}>
          Siguiente
        </Button>
      </Cell>
    </FormCard>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.object,
};

export default LoginForm;
