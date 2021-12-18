import React from 'react';
import PropTypes from 'prop-types';
import { CoachesTeamView, PlayerTeamView } from '.';

export default function Home({ user }) {
  return (
    <>
      {user?.isCoach ? (
        <CoachesTeamView user={user} />
      ) : (
        <PlayerTeamView user={user} />
      )}
    </>
  );
}

Home.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Home.defaultProps = { user: null };
