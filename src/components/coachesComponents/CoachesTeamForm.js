import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { createTeam } from '../../helpers/index';

// import PropTypes from 'prop-types'

const initialState = {
  firebaseKey: '',
  teamName: '',
};

function CoachesTeamForm() {
  const [formInput, setFormInput] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (fbKey) {
      // edit promise goes here.
    } else {
      setFormInput(initialState);
      console.warn(formInput);
      console.warn('You are on the Coaches Team Form');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fbKey) {
      resetForm();
      history.push('/');
    } else {
      createTeam({ ...formInput }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add/Edit Team Form</h3>
      <formInput>
        <div>
          <input
            type="text"
            className="form-control"
            name="teamName"
            value={formInput.teamName || ''}
            onChange={handleChange}
            placeholder="Team Name"
            required
          />
        </div>
        <div className="form-btn-group">
          <button type="submit" className="btn btn-success">
            {fbKey ? 'Update' : 'Submit'}
          </button>
        </div>
      </formInput>
    </form>
  );
}

CoachesTeamForm.propTypes = {};

export default CoachesTeamForm;
