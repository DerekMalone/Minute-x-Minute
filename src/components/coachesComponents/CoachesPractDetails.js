import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CardGroup } from 'reactstrap';
import { CoachesPracticeDrills } from '..';
import { getPractDrills, getSinglePractice } from '../../helpers';

const CoachesPractDetails = () => {
  const [practDetail, setPractDetail] = useState([]);
  const [drillArray, setDrillArray] = useState([]);
  const { fbKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSinglePractice(fbKey).then((practInfo) => {
      getPractDrills(practInfo.firebaseKey).then((drillArr) => {
        setDrillArray(drillArr);
      });
      if (isMounted) setPractDetail(practInfo);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div>
        <h2>{practDetail.name}</h2>
      </div>
      <div>
        <CardGroup>
          <div>
            {drillArray.map((drill) => (
              <CoachesPracticeDrills key={drill.name} drill={drill} />
            ))}
          </div>
        </CardGroup>
      </div>
      <div>
        <Link
          to={`/drillForm/${practDetail.firebaseKey}`}
          type="button"
          className="btn btn-success"
        >
          Add New Drill
        </Link>
      </div>
    </div>
  );
};

export default CoachesPractDetails;
