import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Ministry from '../components/Ministry/Ministry'
import ChildrenMinistry from '../components/Ministry/ChildrenMinistry';
import CampusMinistry from '../components/Ministry/CampusMinistry';
import JuniorHighSummerMinistry from '../components/Ministry/JuniorHighSummerMinistry';
import SeniorMinistry from '../components/Ministry/SeniorMinistry';
import SportMinistry from '../components/Ministry/SportMinistry';
import NotFound from '../components/NotFound/NotFound';

function MinistryPage() {
  return (
    <div>
    <Switch>
      <Route path='/ministry' exact>
        <Ministry />
      </Route>
      <Route path='/ministry/children'>
        <ChildrenMinistry />
      </Route>
      <Route path='/ministry/campus'>
        <CampusMinistry />
      </Route>
      <Route path='/ministry/juniorHigh'>
        <JuniorHighSummerMinistry />
      </Route>
      <Route path='/ministry/senior'>
        <SeniorMinistry />
      </Route>
      <Route path='/ministry/sport'>
        <SportMinistry />
      </Route>
      <Route path='/*'>
        <NotFound />
      </Route>
    </Switch>
    </div>
  )
}

export default MinistryPage
