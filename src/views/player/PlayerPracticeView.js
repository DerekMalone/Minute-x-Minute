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
  `;

  const PlayersDrillStyling = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  `;

  const PlayerTitleContainer = styled.div`
    justify-content: center;

    h1 {
      color: #e65722;
    }
  `;

  const PracticeCards = styled.div`
    justify-content: center;
    margin: 2rem;
  `;

  const SearchContainer = styled.div`
    width: 80%;
    margin: 0 10%;
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
            <PracticeCards>
              <CardGroup>
                {array.map((practice) => (
                  <PlayersPracticeComponent
                    key={practice.name}
                    practice={practice}
                  />
                ))}
              </CardGroup>
            </PracticeCards>
          </>
        </PlayersDrillStyling>
      </PlayersDrillsContainer>
    </>
  );

  return (
    <div>
      <SearchContainer>
        <Search func={setFilteredPract} array={practices} />
      </SearchContainer>
      {filteredPract.length ? renderDom(filteredPract) : renderDom(practices)}
    </div>
  );
}
