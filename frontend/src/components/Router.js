import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from './Logo';
import Nav from './navbar/Nav';
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage';
import PrayerPage from '../pages/PrayerPage';
import AlbumPage from '../pages/AlbumPage';
import NotFoundPage from '../pages/NotFoundPage';
import FaithStatement from '../pages/FaithStatement';
import ChurchHistory from '../pages/ChurchHistory';

function Router() {
  return (
    <div>
      <Logo />
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/churchHistory">
          <ChurchHistory />
        </Route>
        <Route path="/faithStatement">
          <FaithStatement />
        </Route>
        <Route path="/prayer">
          <PrayerPage />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
