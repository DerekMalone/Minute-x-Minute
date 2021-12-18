import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PlayerTeamView, PlayerPracticeView, PlayerDrillsView } from '../views';
import PlayerPractDetails from '../components/playersComponents/PlayersPractDetails';

export default function PlayersRoutes({ user }) {
  return (
    <Switch>
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
        path="/playerpracticedetials/:fbKey"
        component={() => <PlayerPractDetails user={user} />}
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
