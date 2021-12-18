import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import CoachesRoutes from './CoachesRoutes';
import PlayersRoutes from './PlayersRoutes';
import Home from '../views/Home';

export default function Routes({ user }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
      </Switch>
      {user?.isCoach && <CoachesRoutes user={user} />}
      <PlayersRoutes user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
