import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { deletePractice, getPractDrills } from '../../helpers';
import { CoachesPracticeDrills } from '../index';

const CoachesPracticeComp = ({ practice }) => {
  const [practDrills, setPractDrills] = useState([]);
  const [practTime, setPractTime] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const fetchPractDrills = await getPractDrills(
        practice.firebaseKey,
      ).then();
      const fetchDrillTimes = await fetchPractDrills;
      if (isMounted) {
        setPractDrills(fetchPractDrills);
        setPractTime(fetchDrillTimes.map((drill) => Number(drill.duration)));
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  let totalTime = 0;
  const timeCalc = () => {
    for (let i = 0; i < practTime.length; i++) {
      totalTime += practTime[i];
    }
    return totalTime;
  };

  const handleDelete = () => {
    deletePractice(practice.firebaseKey).then(() => history.go(0));
  };

  return (
    <>
      <div>
        <div>
          <h2>{practice.name}</h2>
          <h4>Practice Date: {practice.dateTime}</h4>
          <h5>Total Practice Duration - {timeCalc()} Minutes</h5>
        </div>
      </div>
      <div>
        {practDrills.map((drill) => (
          <CoachesPracticeDrills key={drill.name} drill={drill} />
        ))}
      </div>
      <div>
        <Link
          to={`/practicedetials/${practice.firebaseKey}`}
          type="button"
          className="btn btn-success"
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
      </div>
    </>
  );
};

CoachesPracticeComp.propTypes = {
  practice: PropTypes.shape(PropTypes.obj),
};

CoachesPracticeComp.defaultProps = { practice: {} };

export default CoachesPracticeComp;
