import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ChildrenMinistry from '../components/Ministry/ChildrenMinistry';
import CampusMinistry from '../components/Ministry/CampusMinistry';

function MinistryPage() {
  return (
    <div>
    <Switch>
      <Route path='/ministry/children'>
        <ChildrenMinistry />
      </Route>
      <Route path='/ministry/campus'>
        <CampusMinistry />
      </Route>
    </Switch>
    </div>
  )
}

export default MinistryPage
