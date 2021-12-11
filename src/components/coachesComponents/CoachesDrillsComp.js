import React, { useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import PropTypes from 'prop-types';

const CoachesDrillsComp = ({ drill }) => {
  useEffect(() => {}, []);

  return (
    <div>
      {/* style={{ flex: 1 }}  */}
      <Card body color="warning" outline>
        <CardBody>
          <CardTitle tag="h5">{drill.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {drill.conditioning}
          </CardSubtitle>
          <CardText>{drill.details}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

CoachesDrillsComp.propTypes = {
  drill: PropTypes.shape(PropTypes.obj),
};

CoachesDrillsComp.defaultProps = { drill: {} };

export default CoachesDrillsComp;
