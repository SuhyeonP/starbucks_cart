import React from 'react';
import { GlobalStyled } from './styles';
import {Redirect, Route, Switch } from 'react-router-dom';
import Login from '@pages/Login';
import Select from '@pages/Select';

const App = (): JSX.Element => {
  return (
    <Switch>
        <Route exact path='/'>
            <Redirect to='/login' />
        </Route>
        <Route path='/login' component={Login}/>
        <Route path='/select' component={Select}/>
    </Switch>
  );
};

export default App;
