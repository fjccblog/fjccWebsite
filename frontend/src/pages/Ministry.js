import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ChildrenMinistry from '../components/Ministry/ChildrenMinistry';
import CampusMinistry from '../components/Ministry/CampusMinistry';
import JuniorHighSummerMinistry from '../components/Ministry/JuniorHighSummerMinistry';

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
      <Route path='/ministry/juniorHigh'>
        <JuniorHighSummerMinistry />
      </Route>
    </Switch>
    </div>
  )
}

export default MinistryPage
