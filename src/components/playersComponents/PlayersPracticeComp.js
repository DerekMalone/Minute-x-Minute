import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPractDrills } from '../../helpers';
import PlayerPracticeDrills from './PlayersPractDrills';

const PlayersPracticeComponent = ({ practice }) => {
  const [practDrills, setPractDrills] = useState([]);
  const [practTime, setPractTime] = useState(0);

  const PlayersPractCompStyle = styled.div`
    width: 100%;
    justify-content: center;

    h2 {
      color: #007a4b;
    }
    h4 {
      color: #007a4b;
    }
    h5 {
      color: #007a4b;
    }
  `;

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

  return (
    <>
      <PlayersPractCompStyle>
        <div>
          <div>
            <h2>{practice.name}</h2>
            <h4>Practice Date: {practice.dateTime}</h4>
            <h5>Total Practice Duration - {timeCalc()} Minutes</h5>
          </div>
        </div>
        <div>
          <Link
            to={`/playerpracticedetials/${practice.firebaseKey}`}
            type="button"
            className="btn btn-success"
          >
            View Practice Details
          </Link>
        </div>
        <div>
          {practDrills.map((drill) => (
            <PlayerPracticeDrills key={drill.name} drill={drill} />
          ))}
        </div>
      </PlayersPractCompStyle>
    </>
  );
};

PlayersPracticeComponent.propTypes = {
  practice: PropTypes.shape(PropTypes.obj),
};

PlayersPracticeComponent.defaultProps = { practice: {} };

export default PlayersPracticeComponent;
