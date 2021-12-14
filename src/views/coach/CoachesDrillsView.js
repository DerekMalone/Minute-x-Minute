import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardGroup } from 'reactstrap';
import { CoachesDrillsComp } from '../../components';
import { getDrills } from '../../helpers';
import Search from '../Search';

export default function CoachesDrillsView() {
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
  // function created to render to DOM. Generic function that can work if filteredDrills or just Drills
  const renderDom = (array) => (
    <>
      {/* style={{ display: 'flex', flexDirection: 'row' }} */}
      <h1>Coaches Drill View Page</h1>
      <CardGroup>
        <div>
          {array.map((drill) => (
            <CoachesDrillsComp key={drill.name} drill={drill} />
          ))}
        </div>
      </CardGroup>
      <Link to="/drillForm" type="button" className="btn btn-success">
        Create a New Drill
      </Link>
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
