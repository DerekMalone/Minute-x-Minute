import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardGroup } from 'reactstrap';
import { CoachesDrillsComp } from '../../components';
import { getDrills } from '../../helpers';

export default function CoachesDrillsView() {
  const [drills, setdrills] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getDrills().then((drillArray) => {
      if (isMounted) setdrills(drillArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {drills ? (
        <>
          <h1>Coaches Drill View Page</h1>
          <CardGroup>
            <div>
              {drills.map((drill) => (
                <CoachesDrillsComp key={drill.name} drill={drill} />
              ))}
            </div>
          </CardGroup>
          <Link to="/drillForm" type="button" className="btn btn-success">
            Create a New Drill
          </Link>
        </>
      ) : (
        <>
          <h4>No Drills yet</h4>
          <button type="button" className="btn btn-success">
            Create a New Drill
          </button>
        </>
      )}
    </div>
  );
}
