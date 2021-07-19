import React from 'react';
import AppContext from './components/AppContext';
import Content from './components/Content';

function App() {
  return (
    <AppContext>
      <Content />
    </AppContext>
  );
}

export default App;
