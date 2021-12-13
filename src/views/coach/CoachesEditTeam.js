import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoachesTeamForm } from '../../components';
import { getSigleTeam } from '../../helpers';

const CoachesEditTeam = () => {
  const { fbKey } = useParams();
  const [editTeam, setEditTeam] = useState({});

  useEffect(() => {
    getSigleTeam(fbKey).then(setEditTeam);
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
