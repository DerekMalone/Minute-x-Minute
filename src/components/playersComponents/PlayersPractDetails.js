import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CardGroup } from 'reactstrap';
import { PlayerPracticeDrills } from '..';
import { getPractDrills, getSinglePractice } from '../../helpers';

const PlayerPractDetails = () => {
  const [practDetail, setPractDetail] = useState([]);
  const [drillArray, setDrillArray] = useState([]);
  const [practTime, setPractTime] = useState(0);
  const { fbKey } = useParams();

  const PlayerPractDetailsContainer = styled.div`
    display: flex;
    margin: 2rem 0;
  `;

  const PlayersPractDetailStyling = styled.div`
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

  const PlayersPractInfoCont = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 10%;
    margin: 1rem;
  `;

  const PlayersDrillsContainer = styled.div`
    justify-content: center;
    margin: 2rem 10%;
    width: 80%;
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
    <PlayerPractDetailsContainer>
      <PlayersPractDetailStyling>
        <PlayersPractInfoCont>
          <div>
            <h2>{practDetail.name}</h2>
          </div>
          <div>
            <h4>Practice Date: {practDetail.dateTime}</h4>
          </div>
          <div>
            <h5>Total Practice Duration - {timeCalc()} Minutes</h5>
          </div>
        </PlayersPractInfoCont>
        <div>
          <PlayersDrillsContainer>
            <CardGroup>
              <div>
                {drillArray.map((drill) => (
                  <PlayerPracticeDrills key={drill.name} drill={drill} />
                ))}
              </div>
            </CardGroup>
          </PlayersDrillsContainer>
        </div>
      </PlayersPractDetailStyling>
    </PlayerPractDetailsContainer>
  );
};

export default PlayerPractDetails;
