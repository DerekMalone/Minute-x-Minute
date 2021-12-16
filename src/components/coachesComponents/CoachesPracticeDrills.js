import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { deleteDrill } from '../../helpers';

export default function CoachesPracticeDrills({ drill, func }) {
  const history = useHistory();

  func(drill.duration);

  const handleDelete = () => {
    deleteDrill(drill.firebaseKey).then(() => history.go(0));
  };

  return (
    <>
      <Card body color="warning" outline>
        <CardBody>
          <CardTitle tag="h5">{drill.name}</CardTitle>
          <div>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {drill.conditioning}
            </CardSubtitle>
            {drill.duration ? (
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {drill.duration} Minutes
              </CardSubtitle>
            ) : (
              ''
            )}
          </div>
          <CardText>{drill.details}</CardText>
          <Link
            to={`/editdrill/${drill.firebaseKey}`}
            type="button"
            className="btn btn-info"
          >
            Edit Drill
          </Link>
          <Button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

CoachesPracticeDrills.propTypes = {
  drill: PropTypes.shape(PropTypes.obj).isRequired,
  func: PropTypes.func.isRequired,
};
