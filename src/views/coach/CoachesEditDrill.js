import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoachesDrillForm } from '../../components';
import { getSigleDrill } from '../../helpers';

const CoachesEditDrill = () => {
  const { fbKey } = useParams();
  const [editDrill, setEditDrill] = useState({});

  useEffect(() => {
    getSigleDrill(fbKey).then(setEditDrill);
  }, []);

  return (
    <>
      <div>
        <div className="formContainer">
          <CoachesDrillForm practice={editDrill} />
        </div>
      </div>
    </>
  );
};

export default CoachesEditDrill;
