import React, { useState, useEffect } from 'react';
import { CardGroup } from 'reactstrap';
import styled from 'styled-components';
import { CoachesDrillsComp } from '../../components';
import { getDrills } from '../../helpers';
import Search from '../Search';

export default function CoachesDrillsView() {
  const [drills, setdrills] = useState([]);
  const [filteredDrills, setFilteredDrills] = useState([]); // used for Search Bar

  const DrillContainer = styled.div`
    display: flex;
    margin: 2rem 0;
    width: 100%;
  `;

  const DrillStyling = styled.div`
    flex-wrap: wrap;
    width: 100%;
    align: center:
  `;

  const TitleContainer = styled.div`
    justify-content: center;

    h1 {
      color: #007a4b;
    }
  `;

  const DrillCardsContainler = styled.div`
    width: 100%;
    justify-content: center;
  `;

  const DrillCards = styled.div`
    justify-content: center;
    margin: 2rem;
    width: 80%;
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
      <DrillContainer>
        <DrillStyling>
          <TitleContainer>
            <h1>Coaches Drill View Page</h1>
          </TitleContainer>
          <CardGroup>
            <DrillCardsContainler>
              <DrillCards>
                {array.map((drill) => (
                  <CoachesDrillsComp key={drill.name} drill={drill} />
                ))}
              </DrillCards>
            </DrillCardsContainler>
          </CardGroup>
        </DrillStyling>
      </DrillContainer>
    </>
  );

  return (
    <div>
      {/* Passes necessary props to Search */}
      <Search func={setFilteredDrills} array={drills} />
      {/* Checks to see if filteredDrills has a lenght, if yes, passes filteredDrills through else passed drills though */}
      {filteredDrills.length ? renderDom(filteredDrills) : renderDom(drills)}
    </div>
  );
}
