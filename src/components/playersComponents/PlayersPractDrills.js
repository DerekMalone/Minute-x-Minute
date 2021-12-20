import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';

export default function PlayerPracticeDrills({ drill }) {
  const DrillCardStyle = styled.div`
    margin: 1rem;

    h5 {
      color: black;
    }
  `;

  return (
    <>
      <DrillCardStyle>
        {drill.conditioning === true ? (
          <Card body color="warning" outline>
            <CardBody>
              <CardTitle tag="h5">Conditioning</CardTitle>
            </CardBody>
          </Card>
        ) : (
          <Card body color="warning" outline>
            <CardBody>
              <CardTitle tag="h5">{drill.name}</CardTitle>
              <div>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Conditioning:{' '}
                  {drill.conditioning === 'true' ? 'True' : 'False'}
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
        )}
      </DrillCardStyle>
    </>
  );
}

PlayerPracticeDrills.propTypes = {
  drill: PropTypes.shape(PropTypes.obj).isRequired,
};
