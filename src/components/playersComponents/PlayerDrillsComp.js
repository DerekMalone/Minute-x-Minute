import React from 'react';
import styled from 'styled-components';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function PlayerDrillsComp({ drill }) {
  const DrillCardStyle = styled.div`
    margin: 1rem;
  `;

  return (
    <DrillCardStyle>
      <Card body color="warning" outline>
        <CardBody>
          <CardTitle tag="h5">{drill.name}</CardTitle>
          <div>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Conditioning: {drill.conditioning === 'true' ? 'True' : 'False'}
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
    </DrillCardStyle>
  );
}

PlayerDrillsComp.propTypes = {
  drill: PropTypes.shape(PropTypes.obj),
};

PlayerDrillsComp.defaultProps = { drill: {} };

// export default PlayerDrillsComp;
