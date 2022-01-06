import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CardGroup } from 'reactstrap';
import Search from '../Search';
import CoachesPracticeComp from '../../components/coachesComponents/CoachesPracticeComp';
import { getPractices } from '../../helpers';

export default function CoachesPracticesView() {
  const [practices, setPractices] = useState([]);
  const [filteredPract, setFilteredPract] = useState([]);

  const PracticeCardsContainer = styled.div`
    display: flex;
    margin: 2rem 0;
  `;

  const PracticeContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  `;

  const PracticeTitle = styled.h1`
    justify-content: center;
    color: #007a4b;
  `;

  const PracticeCards = styled.div`
    justify-content: center;
    margin: 2rem;
  `;

  const SearchContainer = styled.div`
    width: 80%;
    margin: 0 10%;
  `;

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
    <PracticeCardsContainer>
      <PracticeContainer>
        <div>
          <PracticeTitle>Practice View</PracticeTitle>
          <Link to="/practiceform" type="button" className="btn btn-success">
            New Practice
          </Link>
        </div>
        <>
          <PracticeCards>
            <CardGroup>
              {array.map((practice) => (
                <CoachesPracticeComp key={practice.name} practice={practice} />
              ))}
            </CardGroup>
          </PracticeCards>
        </>
      </PracticeContainer>
    </PracticeCardsContainer>
  );

  return (
    <div>
      <SearchContainer>
        <Search func={setFilteredPract} array={practices} />
      </SearchContainer>
      {filteredPract.length ? renderDom(filteredPract) : renderDom(practices)}
    </div>
  );
}
