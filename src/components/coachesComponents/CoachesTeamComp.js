import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardTitle } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { deleteTeam } from '../../helpers';

const CoachesTeamComp = ({ team }) => {
  const history = useHistory();

  const handleDelete = () => {
    deleteTeam(team.firebaseKey).then(() => history.go(0));
  };

  return (
    <div>
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
    </div>
  );
};

CoachesTeamComp.propTypes = {
  team: PropTypes.shape(PropTypes.obj),
};

CoachesTeamComp.defaultProps = { team: {} };

export default CoachesTeamComp;
