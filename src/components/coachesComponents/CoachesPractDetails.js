import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CardGroup } from 'reactstrap';
import { CoachesPracticeDrills } from '..';
import { getPractDrills, getSinglePractice } from '../../helpers';

const CoachesPractDetails = () => {
  const [practDetail, setPractDetail] = useState([]);
  const [drillArray, setDrillArray] = useState([]);
  const [practTime, setPractTime] = useState(0);
  const { fbKey } = useParams();

  const PractDetailsContainer = styled.div`
    display: flex;
    margin: 2rem 0;
  `;

  const PractDetailStyling = styled.div`
    width: 100%;

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

  const PractInfoContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 10%;
  `;

  const DrillsContainer = styled.div`
    justify-content: center;
    margin: 2rem 10%;
    width: 80%;
  `;

  const PractDrills = styled.div`
    justify-content: center;
  `;

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const fetchSinglePract = await getSinglePractice(fbKey).then();
      const fetchPractDrills = await getPractDrills(
        fetchSinglePract.firebaseKey,
      ).then();
      const fetchDrillTimes = await fetchPractDrills;
      if (isMounted) {
        setPractDetail(fetchSinglePract);
        setDrillArray(fetchPractDrills);
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
    <PractDetailsContainer>
      <PractDetailStyling>
        <PractInfoContainer>
          <div>
            <h2>{practDetail.name}</h2>
          </div>
          <div>
            <h4>Practice Date: {practDetail.dateTime}</h4>
          </div>
          <div>
            <h5>Total Practice Duration - {timeCalc()} Minutes</h5>
          </div>
        </PractInfoContainer>
        <DrillsContainer>
          <CardGroup>
            <PractDrills>
              {drillArray.map((drill) => (
                <CoachesPracticeDrills key={drill.name} drill={drill} />
              ))}
            </PractDrills>
          </CardGroup>
        </DrillsContainer>
        <div>
          <Link
            to={`/drillForm/${practDetail.firebaseKey}`}
            type="button"
            className="btn btn-success"
          >
            Add New Drill
          </Link>
        </div>
      </PractDetailStyling>
    </PractDetailsContainer>
  );
};

export default CoachesPractDetails;
