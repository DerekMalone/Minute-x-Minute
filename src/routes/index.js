import React from 'react';
import PropTypes from 'prop-types';
import CoachesRoutes from './CoachesRoutes';
// import PlayersRoutes from './PlayersRoutes';

export default function Routes({ user }) {
  return (
    <>
      {/* {user?.isCoach && <CoachesRoutes user={user} />} */}
      {/* <PlayersRoutes user={user} /> */}
      <CoachesRoutes user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
