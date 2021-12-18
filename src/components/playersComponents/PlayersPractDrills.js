import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';

export default function PlayerPracticeDrills({ drill }) {
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
        </CardBody>
      </Card>
    </>
  );
}

PlayerPracticeDrills.propTypes = {
  drill: PropTypes.shape(PropTypes.obj).isRequired,
};
