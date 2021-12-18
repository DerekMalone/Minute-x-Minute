import React from 'react';
import { Route, Switch } from 'react-router-dom'; // , Redirect
import PropTypes from 'prop-types';
import {
  CoachesDrillsView,
  CoachesEditDrill,
  CoachesEditPractice,
  CoachesEditTeam,
  CoachesPracticesView,
  CoachesTeamView,
  Home,
} from '../views';
import {
  CoachesDrillForm,
  CoachesPracticeForm,
  CoachesTeamForm,
} from '../components';
import CoachesPractDetails from '../components/coachesComponents/CoachesPractDetails';

// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   if (user === null) return user;

//   const routeChecker = (burrito) => (user?.isAdmin
//     // eslint-disable-next-line react/jsx-props-no-spreading
//     ? (<Component {...burrito} user={user} />)
//     : (<Redirect to={{ pathname: '/sign-in', state: { from: burrito.location } }} />));
//   // eslint-disable-next-line react/jsx-props-no-spreading
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.func.isRequired,
//   user: PropTypes.shape(PropTypes.obj),
// };

// PrivateRoute.defaultProps = {
//   user: null,
// };

export default function CoachesRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home user={user} />} />
      <Route
        exact
        path="/teamview"
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
  );
}
CoachesRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

CoachesRoutes.defaultProps = {
  user: null,
};
