import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardTitle } from 'reactstrap';
import { deleteTeam } from '../../helpers';

const CoachesTeamComp = ({ team }) => {
  useEffect(() => {}, []);

  const handleDelete = () => {
    console.warn('delete clicked on', team.teamName);
    deleteTeam(team.firebaseKey).then();
  };

  return (
    <div>
      <Card body color="warning" outline>
        <CardTitle tag="h5">{team.teamName}</CardTitle>
        {/* <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText> */}
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
