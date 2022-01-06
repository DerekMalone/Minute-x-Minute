import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CoachesTeamComp } from '../../components';
import { getTeams } from '../../helpers/index';

export default function CoachesTeamView() {
  const [teams, setTeams] = useState([]);

  const TeamCardsContainer = styled.div`
    flex-wrap: wrap;
    margin: 2rem 0;
  `;

  const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  const TeamTitle = styled.h1`
    justify-content: center;
    color: #007a4b;
  `;

  const TeamCards = styled.div`
    justify-content: center;
    width: 80%;
    margin: 1rem;
  `;

  useEffect(() => {
    let isMounted = true;
    getTeams().then((teamArray) => {
      if (isMounted) setTeams(teamArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <TeamCardsContainer>
      <TeamTitle>Coaches Teams</TeamTitle>
      <TeamContainer>
        {teams ? (
          <>
            <TeamCards>
              <div>
                {teams.map((team) => (
                  <CoachesTeamComp key={team.teamName} team={team} />
                ))}
              </div>
              <div>
                <Link to="/teamForm" type="button" className="btn btn-success">
                  Create a New Team
                </Link>
              </div>
            </TeamCards>
          </>
        ) : (
          <>
            <h4>No Team yet</h4>
            <Link to="/teamForm" type="button" className="btn btn-success">
              Create a New Team
            </Link>
          </>
        )}
      </TeamContainer>
    </TeamCardsContainer>
  );
}
