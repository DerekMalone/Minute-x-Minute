import React, { useEffect, useState } from 'react';
import { CardGroup } from 'reactstrap';
import Search from '../Search';
import { getPractices } from '../../helpers';
import PlayersPracticeComponent from '../../components/playersComponents/PlayersPracticeComp';

export default function PlayerPracticeView() {
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
      </div>
      <>
        <div>
          <CardGroup>
            {array.map((practice) => (
              <PlayersPracticeComponent
                key={practice.name}
                practice={practice}
              />
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
