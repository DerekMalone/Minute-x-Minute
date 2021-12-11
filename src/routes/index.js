import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// import CoachesRoutes from './CoachesRoutes';
import {
  CoachesPracticesView,
  CoachesDrillsView,
  CoachesTeamView,
  CoachesEditTeam,
  CoachesEditPractice,
} from '../views';
import {
  CoachesDrillForm,
  CoachesPracticeForm,
  CoachesTeamForm,
} from '../components';
// import PlayersRoutes from './PlayersRoutes';

export default function Routes({ user }) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <CoachesTeamView user={user} />}
        />
        <Route
          exact
          path="/practiceview"
          component={() => <CoachesPracticesView user={user} />}
        />
        <Route
          exact
          path="/drillview"
          component={() => <CoachesDrillsView user={user} />}
        />
        <Route
          exact
          path="/teamForm"
          component={() => <CoachesTeamForm user={user} />}
        />
        <Route
          exact
          path="/practiceForm"
          component={() => <CoachesPracticeForm user={user} />}
        />
        <Route
          exact
          path="/drillForm"
          component={() => <CoachesDrillForm user={user} />}
        />
        <Route
          exact
          path="/editpractice/:fbKey"
          component={CoachesEditPractice}
        />
        <Route exact path="/editteam/:fbKey" component={CoachesEditTeam} />
      </Switch>
      {/* {user?.isCoach && <CoachesRoutes user={user} />} */}
      {/* <PlayersRoutes user={user} /> */}
      {/* <CoachesRoutes user={user} /> */}
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
