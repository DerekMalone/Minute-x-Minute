import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CoachesPracticesView,
  CoachesDrillsView,
  CoachesTeamView,
  CoachesEditTeam,
  CoachesEditPractice,
  CoachesEditDrill,
} from '../views';
import {
  CoachesDrillForm,
  CoachesPractDetails,
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
          path="/practiceview/:page"
          component={() => <CoachesPracticesView user={user} />}
        />
        <Route
          exact
          path="/practicedetials/:fbKey"
          component={() => <CoachesPractDetails user={user} />}
        />
        <Route
          exact
          path="/drillview/:page"
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
          path="/drillForm/:practFBKey"
          component={() => <CoachesDrillForm user={user} />}
        />
        <Route exact path="/editteam/:fbKey" component={CoachesEditTeam} />
        <Route
          exact
          path="/editpractice/:fbKey"
          component={CoachesEditPractice}
        />
        <Route exact path="/editdrill/:fbKey" component={CoachesEditDrill} />
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
