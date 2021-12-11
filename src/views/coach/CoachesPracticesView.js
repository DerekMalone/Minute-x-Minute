import React, { useEffect, useState } from 'react';
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
      {practices ? (
        <>
          <h1>Practice View</h1>
          <Table striped>
            <div>
              {practices.map((practice) => (
                <CoachesPracticeComp key={practice.name} practice={practice} />
              ))}
            </div>
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
