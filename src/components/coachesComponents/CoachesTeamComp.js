import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardTitle } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { deleteTeam } from '../../helpers';

const CoachesTeamComp = ({ team }) => {
  const history = useHistory();

  const handleDelete = () => {
    console.warn('delete clicked on', team.teamName);
    deleteTeam(team.firebaseKey).then(() => history.go(0));
  };

  return (
    <div>
      <Card body color="warning" outline>
        <CardTitle tag="h5">{team.teamName}</CardTitle>
        {/* <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText> */}
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
      {/* <h2 className="name-style">{team.teamName}</h2>
          <h3 className="projects-style">{projects[7]}</h3>

          <div className="card-btn-container">
            <a href={projects[6]} type="button" className="btn btn-link">
              Go to Project
            </a>
            <Link
              to={`/edit/${repo.firebaseKey}`}
              type="button"
              className="btn btn-success"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div> */}
    </div>
  );
};

CoachesTeamComp.propTypes = {
  team: PropTypes.shape(PropTypes.obj),
};

CoachesTeamComp.defaultProps = { team: {} };

export default CoachesTeamComp;
