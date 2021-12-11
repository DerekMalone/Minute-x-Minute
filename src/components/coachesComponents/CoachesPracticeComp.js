import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { deletePractice } from '../../helpers';

const CoachesPracticeComp = ({ practice }) => {
  const handleDelete = () => {
    console.warn('deleted', practice.firebaseKey);
    deletePractice(practice.firebaseKey).then();
  };

  useEffect(() => {}, []);

  return (
    <>
      <thead>
        <tr>
          <th>#</th>
          <th>{practice.name}</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
      <Button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  );
};

CoachesPracticeComp.propTypes = {
  practice: PropTypes.shape(PropTypes.obj),
};

CoachesPracticeComp.defaultProps = { practice: {} };

export default CoachesPracticeComp;
