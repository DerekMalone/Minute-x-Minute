import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardGroup } from 'reactstrap';
import Search from '../Search';
import { getPractices } from '../../helpers';
import PlayersPracticeComponent from '../../components/playersComponents/PlayersPracticeComp';

export default function PlayerPracticeView() {
  const [practices, setPractices] = useState([]);
  const [filteredPract, setFilteredPract] = useState([]);

  const PlayersDrillsContainer = styled.div`
    display: flex;
    margin: 2rem 0;
    width: 100%;
  `;

  const PlayersDrillStyling = styled.div`
  flex-wrap: wrap;
  width: 100%;
  align: center:
  `;

  const PlayerTitleContainer = styled.div`
    justify-content: center;

    h1 {
      color: #e65722;
    }
  `;

  useEffect(() => {
    let isMounted = true;
    getPractices().then((practArray) => {
      if (isMounted) setPractices(practArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const renderDom = (array) => (
    <>
      <PlayersDrillsContainer>
        <PlayersDrillStyling>
          <PlayerTitleContainer>
            <h1>Practice View</h1>
          </PlayerTitleContainer>
          <>
            <div>
              <CardGroup>
                {array.map((practice) => (
                  <PlayersPracticeComponent
                    key={practice.name}
                    practice={practice}
                  />
                ))}
              </CardGroup>
            </div>
          </>
        </PlayersDrillStyling>
      </PlayersDrillsContainer>
    </>
  );

  return (
    <div>
      <Search func={setFilteredPract} array={practices} />
      {filteredPract.length ? renderDom(filteredPract) : renderDom(practices)}
    </div>
  );
}
