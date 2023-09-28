import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from "./components/navbar/nav";
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
