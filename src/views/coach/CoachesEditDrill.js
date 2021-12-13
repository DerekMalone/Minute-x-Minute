import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoachesDrillForm } from '../../components';
import { getSingleDrill } from '../../helpers';

const CoachesEditDrill = () => {
  const { fbKey } = useParams();
  const [editDrill, setEditDrill] = useState({});

  useEffect(() => {
    getSingleDrill(fbKey).then(setEditDrill);
  }, []);

  return (
    <>
      <div>
        <div className="formContainer">
          <CoachesDrillForm drill={editDrill} />
        </div>
      </div>
    </>
  );
};

export default CoachesEditDrill;
