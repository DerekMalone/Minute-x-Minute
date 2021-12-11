import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoachesTeamForm } from '../../components';
import { getSigleTeam } from '../../helpers';

const CoachesEditTeam = () => {
  const [editTeam, setEditTeam] = useState({});
  const [firebaseKey] = useParams;

  useEffect(() => {
    console.warn(firebaseKey);
    getSigleTeam(firebaseKey).then(setEditTeam);
  }, []);

  return (
    <>
      <div>
        <div className="formContainer">
          <CoachesTeamForm team={editTeam} />
        </div>
      </div>
    </>
  );
};

export default CoachesEditTeam;
