import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { CoachesPracticeComp } from '../../components';
import { getPractices } from '../../helpers';

export default function CoachesPracticesView() {
  const [practices, setPractices] = useState();

  useEffect(() => {
    let isMounted = true;
    getPractices().then((practArray) => {
      if (isMounted) setPractices(practArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div>
        <h1>Practice View</h1>
        <Link to="/practiceform" type="button" className="btn btn-success">
          New Practice
        </Link>
      </div>
      {practices ? (
        <>
          <Table striped>
            {practices.map((practice) => (
              <CoachesPracticeComp key={practice.name} practice={practice} />
            ))}
          </Table>
        </>
      ) : (
        <>
          <h2>No Practices yet.</h2>
        </>
      )}
    </div>
  );
}
