import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  serviceData: '',
  userAvailability: '',
  sessionTokenBck: '',
  firstName: '',
  lastName: '',
  email: '',
  active: false,
  passwordHash: '',
  sessionTokenWeb: '',
  phoneNumber: '',
  agreedToTermsOfUse: false,
  whereKnownUs: '',
  lastLogin: '',
  sessionTokenCli: '',
  sessionTokenPro: '',
  funds: 0,
  tokenFacebook: '',
  tokenGoogle: '',
  tokensIonic: '',
  photoPath: '',
  photoExt: '',
  userRole: {
    userRole: '',
    description: '',
    fatherUserRole: '',
    domain: '',
    estatus: 0,
    defaultNamespace: '',
    id: 0,
    _persistence_shouldRefreshFetchGroup: false,
  },
  sync: 0,
  usedCodeList: '',
  referrer: '',
  rut: '',
  domain: '',
  typeProfessional: '',
  tutenSubRole: '',
  userId: 0,
  appVersion: '',
  estatus: 0,
  _persistence_shouldRefreshFetchGroup: false,
};

export const AuthContext = createContext({
  login: initialState,
  updateLogin: () => {},
});

const Context = ({ children }) => {
  const [login, setLogin] = useState(initialState);
  const updateLogin = data => setLogin(data);
  return (
    <AuthContext.Provider value={{ login, updateLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
