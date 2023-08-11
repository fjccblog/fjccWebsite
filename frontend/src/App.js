import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from "./components/navbar/nav";
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

        </Route>
        <Route path="/test">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
