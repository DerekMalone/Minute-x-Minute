import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSinglePractice } from '../../helpers';
// import PropTypes from 'prop-types';

const CoachesPractDetails = () => {
  const [practDetail, setPractDetail] = useState([]);
  // const [drillArray, setDrillArray] = useState([]);
  const { fbKey } = useParams();

  // **need to figure out how I want to pass practiceID into drillForm **
  useEffect(() => {
    let isMounted = true;
    getSinglePractice(fbKey).then((practInfo) => {
      // get practiceDrills().then((drillArr) => {
      // setDrillArray(drillArr);
      // })
      if (isMounted) setPractDetail(practInfo);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h3>Your Practice will go here</h3>
      <h5>{practDetail.name}</h5>
      <Link
        to={`/drillForm/${practDetail.firebaseKey}`}
        type="button"
        className="btn btn-success"
      >
        Add New Drill
      </Link>
    </div>
  );
};

// CoachesPractDetails.propTypes = {

// }

export default CoachesPractDetails;
