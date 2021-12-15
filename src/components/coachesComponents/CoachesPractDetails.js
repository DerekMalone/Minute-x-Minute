import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSinglePractice } from '../../helpers';
// import PropTypes from 'prop-types';

const CoachesPractDetails = () => {
  const [practDetail, setPractDetail] = useState([]);
  const { fbKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSinglePractice(fbKey).then((practInfo) => {
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
    </div>
  );
};

// CoachesPractDetails.propTypes = {

// }

export default CoachesPractDetails;
