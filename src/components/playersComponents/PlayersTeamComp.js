import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap'; //
// import { Link, useHistory } from 'react-router-dom';
// import { deleteTeam } from '../../helpers';

const PlayersTeamComp = ({ team }) => (
  <div>
    <Card body color="warning" outline>
      <CardTitle tag="h5">{team.teamName}</CardTitle>
    </Card>
  </div>
);

PlayersTeamComp.propTypes = {
  team: PropTypes.shape(PropTypes.obj),
};

PlayersTeamComp.defaultProps = { team: {} };

export default PlayersTeamComp;
