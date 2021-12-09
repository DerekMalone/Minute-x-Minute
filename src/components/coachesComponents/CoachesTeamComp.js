import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CoachesTeamComp = ({ team }) => {
  useEffect(() => {
    console.warn('You are on the Coaches Team Component');
  }, []);

  return (
    <div>
      <h6>{team.teamName}</h6>
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
