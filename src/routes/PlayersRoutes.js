import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  PlayerTeamView,
  PlayerPracticeView,
  PlayerDrillsView,
  Home,
} from '../views';

export default function PlayersRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home user={user} />} />
      <Route
        exact
        path="/playerTeamsView"
        component={() => <PlayerTeamView user={user} />}
      />
      <Route
        exact
        path="/playerPracticesView"
        component={() => <PlayerPracticeView user={user} />}
      />
      <Route
        exact
        path="/playerDrillsView"
        component={() => <PlayerDrillsView user={user} />}
      />
    </Switch>
  );
}
PlayersRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

PlayersRoutes.defaultProps = {
  user: null,
};
