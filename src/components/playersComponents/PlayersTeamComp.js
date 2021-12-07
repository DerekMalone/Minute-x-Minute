import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

const PlayersTeamComp = () => {
  useEffect(() => {
    console.warn('You are on the Players Team Component');
  }, []);

  return <div>Component for the Players team.</div>;
};

// PlayersTeamComp.propTypes = {

// }

export default PlayersTeamComp;
