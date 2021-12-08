import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

const initialState = {
  firebaseKey: '',
  teamName: 'sloppy joes',
};

function CoachesTeamForm() {
  const [formInput, setFormInput] = useState({});

  useEffect(() => {
    setFormInput(initialState);
    console.warn(formInput);
  }, []);

  return (
    <div>
      <h3>Coaches Form</h3>
    </div>
  );
}

CoachesTeamForm.propTypes = {};

export default CoachesTeamForm;
