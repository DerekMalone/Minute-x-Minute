import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PlayerTeamView } from '../views';

// import Create from '../views/Create';
// import Edit from '../views/Edit';
// import EditCard from '../views/EditCard';

export default function PlayersRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <PlayerTeamView user={user} />} />
      {/* <Route exact path="/edit/:key" component={Edit} />
      <Route exact path="/create" component={() => <Create user={user} />} /> */}
      {/* <Route
        exact
        path="/edit-card"
        component={() => <EditCard user={user} />}
      /> */}
    </Switch>
  );
}
PlayersRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

PlayersRoutes.defaultProps = {
  user: null,
};
