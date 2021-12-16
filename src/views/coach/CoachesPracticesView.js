import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardGroup } from 'reactstrap';
import Search from '../Search';
import CoachesPracticeComp from '../../components/coachesComponents/CoachesPracticeComp';
import { getPractices } from '../../helpers';

export default function CoachesPracticesView() {
  const [practices, setPractices] = useState([]);
  const [filteredPract, setFilteredPract] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getPractices().then((practArray) => {
      if (isMounted) setPractices(practArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const renderDom = (array) => (
    <>
      <div>
        <h1>Practice View</h1>
        <Link to="/practiceform" type="button" className="btn btn-success">
          New Practice
        </Link>
      </div>
      <>
        <div>
          <CardGroup>
            {array.map((practice) => (
              <CoachesPracticeComp key={practice.name} practice={practice} />
            ))}
          </CardGroup>
        </div>
      </>
    </>
  );

  return (
    <div>
      <Search func={setFilteredPract} array={practices} />
      {filteredPract.length ? renderDom(filteredPract) : renderDom(practices)}
    </div>
  );
}
