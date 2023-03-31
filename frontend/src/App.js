import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from "../src/components/nav";
import HeaderLogo from './components/headerLogo';
import CHNZheYangDeAi from './songs/CHNZheYangDeAi';
import RunDownOne from './components/runDown/runDownOne';

function App() {
  return (
    <div>
      <HeaderLogo />
      <Nav />
      <Switch>
        <Route exact path="/">
          <RunDownOne />
        </Route>
        <Route path="/test">
          <CHNZheYangDeAi />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
