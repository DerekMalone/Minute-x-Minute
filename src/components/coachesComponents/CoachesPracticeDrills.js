import React from 'react';
import PropTypes from 'prop-types';

export default function CoachesPracticeDrills({ drill }) {
  return (
    <>
      <tr>
        {/* <th scope="row">1</th> */}
        <td>{drill.name}</td>
        <td>{drill.conditioning}</td>
        <td>{drill.details}</td>
      </tr>
    </>
  );
}

CoachesPracticeDrills.propTypes = {
  drill: PropTypes.shape(PropTypes.obj).isRequired,
};
