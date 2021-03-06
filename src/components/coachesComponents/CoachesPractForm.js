import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getCurrentUsersUid,
  createPractice,
  getSinglePractice,
} from '../../helpers';
import { updatePractice } from '../../helpers/practiceHelpers';

const initialState = {
  firebaseKey: '',
  duration: '',
  name: '',
  coachID: '',
  teamID: '',
};

function CoachesPracticeForm() {
  const [coachUid, setCoachUid] = useState(null);
  const [formInput, setFormInput] = useState({});
  const { fbKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (fbKey) {
      getSinglePractice(fbKey).then((obj) => {
        setFormInput({
          firebaseKey: obj?.firebaseKey,
          dateTime: obj?.dateTime,
          name: obj?.name,
          coachID: obj?.coachID,
          teamID: obj?.teamID,
        });
      });
    } else {
      setFormInput(initialState);
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
      updatePractice(formInput).then(() => {
        resetForm();
        history.push('/practiceview');
      });
    } else {
      createPractice({ ...formInput, coachID: coachUid }).then(() => {
        resetForm();
        history.push('/practiceview');
      });
    }
  };

  return (
    <>
      <h3 style={{ color: '#007a4b' }}>Add/Edit Practice Form</h3>
      <form stlye={{ margin: '2rem' }} onSubmit={handleSubmit}>
        <div>
          <input
            type="date"
            className="form-control"
            name="dateTime"
            value={formInput.dateTime || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formInput.name || ''}
            onChange={handleChange}
            placeholder="Would you like to name this practice?"
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

CoachesPracticeForm.propTypes = {
  practice: PropTypes.shape({
    firebaseKey: PropTypes.string,
    duration: PropTypes.number,
    name: PropTypes.string,
    coachID: PropTypes.string,
    teamID: PropTypes.string,
  }),
};

CoachesPracticeForm.defaultProps = { practice: {} };

export default CoachesPracticeForm;
