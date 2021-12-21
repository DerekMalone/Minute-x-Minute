import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import {
  createDrill,
  getCurrentUsersUid,
  getSingleDrill,
  updateDrill,
} from '../../helpers';
// import PropTypes from 'prop-types'

const initialState = {
  firebaseKey: '',
  private: false,
  name: '',
  conditioning: false,
  duration: '',
  details: '',
  coachID: '',
  teamID: '',
  practiceID: '',
};

function CoachesDrillForm() {
  const [coachUid, setCoachUid] = useState(null);
  const [formInput, setFormInput] = useState(initialState);
  const { practFBKey } = useParams();
  const { fbKey } = useParams();
  const history = useHistory();

  const CoachesDrillFormStyle = styled.div`
    margin: 2rem;

    h3 {
      color: #007a4b;
    }
  `;

  const CheckBoxStyle = styled.div`
    color: #e65722;
  `;

  useEffect(() => {
    if (fbKey) {
      getSingleDrill(fbKey).then((obj) => {
        setFormInput({
          firebaseKey: obj?.firebaseKey,
          private: obj?.private,
          name: obj?.name,
          conditioning: obj?.conditioning,
          duration: obj?.duration,
          details: obj?.details,
          coachID: obj?.coachID,
          teamID: obj?.teamID,
          practiceID: obj?.practiceID,
        });
      });
    } else if (practFBKey) {
      setFormInput({ ...initialState, practiceID: practFBKey });
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

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setFormInput((preState) => ({
      ...preState,
      [name]: checked,
    }));
  };

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fbKey) {
      updateDrill(formInput).then(() => {
        resetForm();
        history.push('/drillview/:page');
      });
    } else {
      createDrill({ ...formInput, coachID: coachUid }).then(() => {
        resetForm();
        history.push('/practiceview/:page');
      });
    }
  };

  return (
    <CoachesDrillFormStyle>
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
            type="number"
            className="form-control"
            name="duration"
            value={formInput.duration || ''}
            onChange={handleChange}
            placeholder="Duration of Drill in minutes."
            min="1"
            max="240"
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
        <CheckBoxStyle>
          <div>
            <FormControlLabel
              control={(
                <Checkbox
                  onChange={handleCheck}
                  name="private"
                  checked={formInput.private}
                  style={{ color: '#e65722' }}
                />
              )}
              label="Private?"
            />
          </div>
          <div>
            <FormControlLabel
              control={(
                <Checkbox
                  onChange={handleCheck}
                  name="conditioning"
                  checked={formInput.conditioning}
                  style={{ color: '#e65722' }}
                />
              )}
              label="Conditioning?"
            />
          </div>
          <div className="form-btn-group">
            <button type="submit" className="btn btn-success">
              {fbKey ? 'Update' : 'Submit'}
            </button>
          </div>
        </CheckBoxStyle>
      </form>
    </CoachesDrillFormStyle>
  );
}

CoachesDrillForm.propTypes = {};

export default CoachesDrillForm;
