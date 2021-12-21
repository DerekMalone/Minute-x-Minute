import React from 'react';
import styled from 'styled-components';
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

  const DrillCardStyle = styled.div`
    margin: 1rem;
  `;

  const handleDelete = () => {
    deleteDrill(drill.firebaseKey).then(() => history.go(0));
  };

  return (
    <DrillCardStyle>
      <Card body color="warning" outline>
        <CardBody>
          <CardTitle tag="h5">{drill.name}</CardTitle>
          <div>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {drill.conditioning === true ? 'Conditioning' : ''}
            </CardSubtitle>
            {drill.duration ? (
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Drill Duration: {drill.duration} Minutes
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
    </DrillCardStyle>
  );
};

CoachesDrillsComp.propTypes = {
  drill: PropTypes.shape(PropTypes.obj),
};

CoachesDrillsComp.defaultProps = { drill: {} };

export default CoachesDrillsComp;
