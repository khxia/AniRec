import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import AnimeListPage from './components/AnimeListPage/AnimeListPage';

const Main = () => {
    return (
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/anime-list" component={AnimeListPage} />
    </Switch>
)};

export default Main;