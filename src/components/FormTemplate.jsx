import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid-v5';
import styled from 'styled-components';
import { device } from '../assets/mediaSizes.js';

const Form = styled(Grid)`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.desktopS} {
    grid-gap: 1.75rem;
  }

  @media only screen and ${device.tablet} {
    grid-gap: 1.5rem;
  }

  @media only screen and ${device.mobileL} {
    grid-gap: 1rem;
  }

  @media only screen and ${device.mobileM} {
    grid-gap: 0.75rem;
  }

  @media only screen and ${device.mobileS} {
    grid-gap: 0.75rem;
  }
`;

const FormTemplate = ({ children }) => (
  <Cell>
    <Form columns={1} gap={'2rem'}>
      {children}
    </Form>
  </Cell>
);

FormTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormTemplate;
