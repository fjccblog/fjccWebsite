import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from './pages/AboutPage.js';
import AlbumPage from './pages/AlbumPage.js';
import TestimonyPage from './pages/TestimonyPage.js';
import ChurchHistoryPage from './pages/ChurchHistoryPage.js';
import FaithStatementPage from './pages/FaithStatementPage.js';
import HomePageIndex from './components/Home/HomePageIndex.js';
import Logo from './components/Logo/Logo.js';
import MinistryPage from './pages/Ministry.js';
import MeetingTimePage from './pages/MeetingTimePage.js';
import Nav from './components/Navbar/Nav.js';
import NotFoundPage from './pages/NotFoundPage';
import NorthgatePage from './pages/NorthgatePage.js';
import OfferingPage from './pages/OfferingPage.js';
import PrayerLetterPage from './pages/PrayerLetterPage.js'
import PurposePage from './pages/PurposePage.js';
import SpirtualFoodPage from './pages/SpirtualFoodPage.js';
import Footer from './components/Footer/Footer.js';

function Router() {
  return (
    <div>
      <Logo />
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePageIndex />
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
        <Route path="/meetingTime">
          <MeetingTimePage />
        </Route>
        <Route path="/ministry">
          <MinistryPage />
        </Route>
        <Route path="/ng">
          <NorthgatePage />
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
        <Route path="/spirtualFood">
          <SpirtualFoodPage />
        </Route>
        <Route path="/testimony">
          <TestimonyPage />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Router;
