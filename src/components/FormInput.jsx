import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'styled-css-grid';
import styled from 'styled-components';
import { device } from '../assets/mediaSizes.js';

const Label = styled.label`
  display: grid;
`;

const Input = styled.input`
  width: 75%;
  height: 3rem;
  padding: 0 2rem;
  border: 1px solid rgb(186, 186, 186);
  margin-top: 0.75rem;
  border-radius: 0.25rem;

  @media only screen and ${device.desktopS} {
    height: 2.75rem;
    padding: 0 1.75rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }

  @media only screen and ${device.tablet} {
    height: 2.25rem;
    padding: 0 1.25rem;
    margin-top: 0.25rem;
    font-size: 0.7rem;
  }

  @media only screen and ${device.mobileL} {
    height: 2.25rem;
    padding: 0 1rem;
    font-size: 0.7rem;
  }

  @media only screen and ${device.mobileM} {
    height: 2rem;
    padding: 0 1rem;
    font-size: 0.6rem;
  }

  @media only screen and ${device.mobileS} {
    height: 2rem;
    padding: 0 1rem;
    font-size: 0.6rem;
  }
`;

const FormInput = props => (
  <Cell>
    <Label>{props.placeholder}</Label>
    <Input
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  </Cell>
);

FormInput.defaultProps = {
  name: '',
  placeholder: '',
  type: 'text',
  value: '',
};

FormInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default FormInput;
