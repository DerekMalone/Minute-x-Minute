import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CoachesDrillsView,
  CoachesEditDrill,
  CoachesEditPractice,
  CoachesEditTeam,
  CoachesPracticesView,
  CoachesTeamView,
} from '../views';
import {
  CoachesDrillForm,
  CoachesPracticeForm,
  CoachesTeamForm,
} from '../components';
import CoachesPractDetails from '../components/coachesComponents/CoachesPractDetails';

export default function CoachesRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/teamview"
        component={() => <CoachesTeamView user={user} />}
      />
      <Route
        exact
        path="/practiceview"
        component={() => <CoachesPracticesView user={user} />}
      />
      <Route
        exact
        path="/practicedetials/:fbKey"
        component={() => <CoachesPractDetails user={user} />}
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
  );
}
CoachesRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

CoachesRoutes.defaultProps = {
  user: null,
};
