import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { deletePractice, getDrills } from '../../helpers';
import { CoachesPracticeDrills } from '../index';

const CoachesPracticeComp = ({ practice }) => {
  const [practDrills, setPractDrills] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    getDrills().then((drills) => {
      if (isMounted) setPractDrills(drills);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = () => {
    deletePractice(practice.firebaseKey).then(() => history.go(0));
  };

  return (
    <>
      <thead>
        <tr>
          <th>{practice.name}</th>
          <th>Conditioning</th>
          <th>{practice.dateTime}</th>
        </tr>
      </thead>
      <tbody>
        {practDrills.map((drill) => (
          <CoachesPracticeDrills key={drill.name} drill={drill} />
        ))}
      </tbody>
      <Link
        to={`/practicedetials/${practice.firebaseKey}`}
        type="button"
        className="btn btn-info"
      >
        View Practice Details
      </Link>
      <Link
        to={`/editpractice/${practice.firebaseKey}`}
        type="button"
        className="btn btn-info"
      >
        Edit Practice
      </Link>
      <Button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  );
};

CoachesPracticeComp.propTypes = {
  practice: PropTypes.shape(PropTypes.obj),
};

CoachesPracticeComp.defaultProps = { practice: {} };

export default CoachesPracticeComp;
