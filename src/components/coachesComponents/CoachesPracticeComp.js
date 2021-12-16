import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { deletePractice, getPractDrills } from '../../helpers'; // , totalPractTime
import { CoachesPracticeDrills } from '../index';

const CoachesPracticeComp = ({ practice }) => {
  const [practDrills, setPractDrills] = useState([]);
  const [practTime, setPractTime] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    getPractDrills(practice.firebaseKey).then((drills) => {
      if (isMounted) setPractDrills(drills);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // useEffect(() => {
  //   let isMounted = true;
  //   (async () => {
  //     const fetchPractDrills = await getPractDrills(
  //       practice.firebaseKey,
  //     ).then();
  //     const fetchDrillTimes = await fetchPractDrills;
  //     if (isMounted) {
  //       setPractDrills(fetchPractDrills);
  //       setPractTime(fetchDrillTimes.map((drill) => Number(drill.duration)));
  //     }
  //   })();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     console.warn(totalPractTime);
  //     console.warn(mappedDrillTime);
  //     setPractTime(mappedDrillTime.reduce(totalPractTime));
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);
  // const totalledPractTime = setPractTime(() => {
  //   ...
  //   +=time
  // });
  // const mappedDrillTime = () => (practTime.map((time) => Number(time)));

  // const renderPractTime = () => (practTime.reduce(totalPractTime));

  // const renderPractTime = totalPractTime(practTime);

  const handleDelete = () => {
    deletePractice(practice.firebaseKey).then(() => history.go(0));
  };

  return (
    <>
      <div>
        <div>
          <h2>{practice.name}</h2>
          <h4>{practice.dateTime}</h4>
          <h5>Total Practice Duration - {practTime} Minutes</h5>
        </div>
      </div>
      <div>
        {practDrills.map((drill) => (
          <CoachesPracticeDrills
            key={drill.name}
            drill={drill}
            func={setPractTime}
          />
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
