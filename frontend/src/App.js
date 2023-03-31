import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CHNZheYangDeAi from '../src/songs/CHN_ZheYangDeAi'

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <Switch>
        <Route exact path="/">
          <CHNZheYangDeAi />
        </Route>
        <Route path="/test">
          <CHNZheYangDeAi />
        </Route>
      </Switch>
    </>
  );
}

export default App;
