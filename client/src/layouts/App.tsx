import React from 'react';
import Main from '@pages/Main';
import { GlobalStyled } from './styles';

const App = (): JSX.Element => {
  return (
    <GlobalStyled>
      <Main />
    </GlobalStyled>
  );
};

export default App;
