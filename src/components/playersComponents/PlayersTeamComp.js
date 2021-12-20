import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardTitle } from 'reactstrap'; //

const PlayersTeamComp = ({ team }) => {
  const PlayersCardStyle = styled.div`
    justify-content: center;
    width: 80%;
    margin: 1rem;
  `;
  return (
    <PlayersCardStyle>
      <Card body color="warning" outline>
        <CardTitle tag="h5">{team.teamName}</CardTitle>
      </Card>
    </PlayersCardStyle>
  );
};

PlayersTeamComp.propTypes = {
  team: PropTypes.shape(PropTypes.obj),
};

PlayersTeamComp.defaultProps = { team: {} };

export default PlayersTeamComp;
