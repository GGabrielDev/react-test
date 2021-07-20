import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Cell } from 'styled-css-grid-v5';
import { AuthContext } from './AppContext';

const API_URL = 'https://dev.tuten.cl/TutenREST/rest/user/';

const GridDisplay = styled(Grid)`
  width: 90%;
  height: auto;
  align-self: center;
  padding: 0.75rem 0.75rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.3rem;
  grid-gap: 0rem;
  text-align: center;
`;

const CellEntry = styled(Cell)`
  height: 3rem;
  border: 0.1rem solid rgb(0, 0, 0);
`;

const BookingGrid = () => {
  const [list, setList] = useState();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const email = 'contacto@tuten.cl';
    const headers = {
      adminemail: login.email,
      token: login.sessionTokenBck,
      app: 'APP_BCK',
    };
    const params = {
      current: true,
    };
    axios
      .get(`${API_URL}${email}/bookings`, {
        headers: headers,
        params: params,
      })
      .then(res => setList(res.data));
    console.log(list);
  }, []);

  return (
    <GridDisplay columns={5}>
      <CellEntry center middle width={1}>
        BookingId
      </CellEntry>
      <CellEntry center middle width={1}>
        Cliente
      </CellEntry>
      <CellEntry center middle width={1}>
        Fecha de Creación
      </CellEntry>
      <CellEntry center middle width={1}>
        Dirección
      </CellEntry>
      <CellEntry center middle width={1}>
        Precio
      </CellEntry>
    </GridDisplay>
  );
};

export default BookingGrid;
