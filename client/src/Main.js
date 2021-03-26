import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import AnimeListPage from './components/AnimeListPage/AnimeListPage';
import APIPage from './components/APIPage/APIPage';

const Main = () => {
    return (
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/anime-list" component={AnimeListPage} />
      <Route exact path="/api" component={APIPage} />
    </Switch>
)};

export default Main;