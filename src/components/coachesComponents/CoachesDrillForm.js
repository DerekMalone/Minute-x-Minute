import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createDrill, getCurrentUsersUid } from '../../helpers';
// import PropTypes from 'prop-types'

const initialState = {
  firebaseKey: '',
  private: '',
  name: '',
  conditioning: '',
  duration: '',
  details: '',
  coachID: '',
  teamID: '',
};

function CoachesDrillForm() {
  const [coachUid, setCoachUid] = useState(null);
  const [formInput, setFormInput] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (fbKey) {
      // edit promise goes here.
    } else {
      setFormInput(initialState);
      console.warn(coachUid);
      console.warn('You are on the Coaches Drill Form');
    }
  }, []);

  useEffect(() => {
    setCoachUid(getCurrentUsersUid);
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
      // create team promise goes here.
      createDrill({ ...formInput, coachID: coachUid }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <h3>Add/Edit Drill Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formInput.name || ''}
            onChange={handleChange}
            placeholder="Drill Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="private"
            value={formInput.private || ''}
            onChange={handleChange}
            placeholder="Private?"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="conditioning"
            value={formInput.conditioning || ''}
            onChange={handleChange}
            placeholder="Conditioning?"
            required
          />
        </div>
        <div>
          <textarea
            type="text"
            className="form-control"
            name="details"
            value={formInput.details || ''}
            onChange={handleChange}
            placeholder="Input Drill Details"
            required
          />
        </div>
        <div className="form-btn-group">
          <button type="submit" className="btn btn-success">
            {fbKey ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
}

CoachesDrillForm.propTypes = {};

export default CoachesDrillForm;
