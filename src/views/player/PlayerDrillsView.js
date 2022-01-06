import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CardGroup } from 'reactstrap';
import { PlayerDrillsComp } from '../../components';
import { getDrills } from '../../helpers';
import Search from '../Search';

export default function PlayerDrillsView() {
  const [drills, setdrills] = useState([]);
  const [filteredDrills, setFilteredDrills] = useState([]); // used for Search Bar

  const PlayerDrillContainer = styled.div`
    display: flex;
    margin: 2rem 0;
  `;

  const PlayerDrillStyling = styled.div`
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

  const PlayerDrillCardsContainer = styled.div`
    width: 100%;
    justify-content: center;
  `;

  const DrillCards = styled.div`
    justify-content: center;
    margin: 2rem 10%;
    width: 80%;
  `;

  const SearchContainer = styled.div`
    width: 80%;
    margin: 0 10%;
  `;

  useEffect(() => {
    let isMounted = true;
    getDrills().then((drillArray) => {
      if (isMounted) setdrills(drillArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // function created to render to DOM. Generic function that can work if filteredDrills or just Drills
  const renderDom = (array) => (
    <>
      <PlayerDrillContainer>
        <PlayerDrillStyling>
          <PlayerTitleContainer>
            <h1>Players Drill View Page</h1>
          </PlayerTitleContainer>
          <CardGroup>
            <PlayerDrillCardsContainer>
              <DrillCards>
                {array.map((drill) => (
                  <PlayerDrillsComp key={drill.name} drill={drill} />
                ))}
              </DrillCards>
            </PlayerDrillCardsContainer>
          </CardGroup>
        </PlayerDrillStyling>
      </PlayerDrillContainer>
    </>
  );

  return (
    <div>
      {/* Passes necessary props to Search */}
      <SearchContainer>
        <Search func={setFilteredDrills} array={drills} />
      </SearchContainer>
      {/* Checks to see if filteredDrills has a lenght, if yes, passes filteredDrills through else passed drills though */}
      {filteredDrills.length ? renderDom(filteredDrills) : renderDom(drills)}
    </div>
  );
}
