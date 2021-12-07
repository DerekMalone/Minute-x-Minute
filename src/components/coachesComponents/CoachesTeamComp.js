import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

const CoachesTeamComp = () => {
  useEffect(() => {
    console.warn('You are on the Coaches Team Component');
  }, []);

  return <div>Component for the Coaches team.</div>;
};

// CoachesTeamComp.propTypes = {

// }

export default CoachesTeamComp;
