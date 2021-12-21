import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createTeam, getSigleTeam } from '../../helpers/index';
import { updateTeam } from '../../helpers/teamHelpers';

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
      getSigleTeam(fbKey).then((obj) => {
        setFormInput({
          firebaseKey: obj?.firebaseKey,
          teamName: obj?.teamName,
        });
      });
    } else {
      setFormInput(initialState);
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
      updateTeam(formInput).then(() => {
        resetForm();
        history.push('/');
      });
    } else {
      createTeam({ ...formInput }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <h3 style={{ color: '#007a4b' }}>Add/Edit Team Form</h3>
      <form style={{ margin: '2rem' }} onSubmit={handleSubmit}>
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
      </form>
    </>
  );
}

export default CoachesTeamForm;
