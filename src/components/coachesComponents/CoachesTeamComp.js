import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Card, CardTitle } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { deleteTeam } from '../../helpers';

const CoachesTeamComp = ({ team }) => {
  const history = useHistory();

  const CardStyle = styled.div`
    margin: 1rem;
  `;

  const handleDelete = () => {
    deleteTeam(team.firebaseKey).then(() => history.go(0));
  };

  return (
    <CardStyle>
      <Card body color="warning" outline>
        <CardTitle tag="h5">{team.teamName}</CardTitle>
        <Link
          to={`/editteam/${team.firebaseKey}`}
          type="button"
          className="btn btn-info"
        >
          Edit Team
        </Link>
        <Button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Card>
    </CardStyle>
  );
};

CoachesTeamComp.propTypes = {
  team: PropTypes.shape(PropTypes.obj),
};

CoachesTeamComp.defaultProps = { team: {} };

export default CoachesTeamComp;
