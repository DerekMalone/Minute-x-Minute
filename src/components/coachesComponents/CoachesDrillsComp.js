import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteDrill } from '../../helpers';

const CoachesDrillsComp = ({ drill }) => {
  const history = useHistory();

  const handleDelete = () => {
    deleteDrill(drill.firebaseKey).then(() => history.go(0));
  };

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
    </div>
  );
};

CoachesDrillsComp.propTypes = {
  drill: PropTypes.shape(PropTypes.obj),
};

CoachesDrillsComp.defaultProps = { drill: {} };

export default CoachesDrillsComp;
