import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoachesPracticeForm } from '../../components';
import { getSinglePractice } from '../../helpers';

const CoachesEditPractice = () => {
  const { fbKey } = useParams();
  const [editPractice, setEditPractice] = useState({});

  useEffect(() => {
    getSinglePractice(fbKey).then(setEditPractice);
  }, []);

  return (
    <>
      <div>
        <div className="formContainer">
          <CoachesPracticeForm practice={editPractice} />
        </div>
      </div>
    </>
  );
};

export default CoachesEditPractice;
