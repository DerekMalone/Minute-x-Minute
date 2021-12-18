import React, { useState, useEffect } from 'react';
import { CardGroup } from 'reactstrap';
import { PlayerDrillsComp } from '../../components';
import { getDrills } from '../../helpers';
import Search from '../Search';

export default function PlayerDrillsView() {
  const [drills, setdrills] = useState([]);
  const [filteredDrills, setFilteredDrills] = useState([]); // used for Search Bar

  useEffect(() => {
    let isMounted = true;
    getDrills().then((drillArray) => {
      if (isMounted) setdrills(drillArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  console.warn('DrillView', drills);

  // function created to render to DOM. Generic function that can work if filteredDrills or just Drills
  const renderDom = (array) => (
    <>
      <h1>Players Drill View Page</h1>
      <CardGroup>
        <div>
          {array.map((drill) => (
            <PlayerDrillsComp key={drill.name} drill={drill} />
          ))}
        </div>
      </CardGroup>
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
