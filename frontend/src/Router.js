import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from './pages/AboutPage.js';
import AlbumPage from './pages/AlbumPage.js';
import TestimonyPage from './pages/TestimonyPage.js';
import ChurchHistoryPage from './pages/ChurchHistoryPage.js';
import FaithStatementPage from './pages/FaithStatementPage.js';
import HomePage from './components/Home/HomePage.js';
import Logo from './components/Logo/Logo.js';
import MinistryPage from './pages/Ministry.js';
import Nav from './components/Navbar/Nav.js';
import NotFoundPage from './pages/NotFoundPage';
import OfferingPage from './pages/OfferingPage.js';
import PrayerLetterPage from './pages/PrayerLetterPage.js'
import PurposePage from './pages/PurposePage.js';

function Router() {
  return (
    <div>
      <Logo />
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/fjccWebsite">
          <Redirect to="/" />
          {/* just for the purpose of Github pages */}
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/album">
          <AlbumPage />
        </Route>
        <Route path="/churchHistory">
          <ChurchHistoryPage />
        </Route>
        <Route path="/faithStatement">
          <FaithStatementPage />
        </Route>
        <Route path="/ministry">
          <MinistryPage />
        </Route>
        <Route path="/offering">
          <OfferingPage />
        </Route>
        <Route path="/prayerLetter">
          <PrayerLetterPage />
        </Route>
        <Route path="/purpose">
          <PurposePage />
        </Route>
        <Route path="/testimony">
          <TestimonyPage />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
