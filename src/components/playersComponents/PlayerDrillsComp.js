import React from 'react';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function PlayerDrillsComp({ drill }) {
  return (
    <div>
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
    </div>
  );
}

PlayerDrillsComp.propTypes = {
  drill: PropTypes.shape(PropTypes.obj),
};

PlayerDrillsComp.defaultProps = { drill: {} };

// export default PlayerDrillsComp;
